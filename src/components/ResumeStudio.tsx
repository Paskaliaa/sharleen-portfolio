"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Download, LoaderCircle, Send } from "lucide-react";
import type { ExperienceRecord } from "../data/experience";
import { profile } from "../data/profile";
import { countWords, resumeCharacterLimit, resumeWordLimits } from "../lib/resumeLimits";

type Reply = { text: string; sourceIds: string[] };
type Message = { role: "user" | "assistant"; content: string; sourceIds?: string[] };

export function ResumeStudio({ enabled, records }: { enabled: boolean; records: ExperienceRecord[] }) {
  const [mode, setMode] = useState<"cv" | "chat">("cv");
  const [brief, setBrief] = useState("");
  const [question, setQuestion] = useState("");
  const [draft, setDraft] = useState<Reply | null>(null);
  const [conversation, setConversation] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [downloading, setDownloading] = useState(false);
  const available = enabled || mode === "cv";
  const input = mode === "cv" ? brief : question;
  const wordLimit = resumeWordLimits[mode];
  const words = countWords(input);
  const overBy = words - wordLimit;
  const warning = overBy > 0
    ? `Remove ${overBy} ${overBy === 1 ? "word" : "words"} before submitting.`
    : input.length > resumeCharacterLimit ? "Shorten the text to 8,000 characters or fewer." : "";

  async function submit(event: FormEvent) {
    event.preventDefault();
    const content = input.trim();
    if (!content || busy || !available || warning) return;
    const sentMode = mode;
    const questionMessage: Message = { role: "user", content };
    const context = sentMode === "cv" ? [] : conversation.slice(-6);
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/experience", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: sentMode,
          messages: [...context, questionMessage].map(({ role, content }) => ({
            role, content: role === "assistant" ? content.slice(0, 3000) : content,
          })),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Please try again.");
      if (sentMode === "cv") setDraft(result);
      else {
        setConversation([...conversation, questionMessage, { role: "assistant", content: result.text, sourceIds: result.sourceIds }]);
        setQuestion("");
      }
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function download() {
    if (!draft || downloading) return;
    setDownloading(true);
    setError("");
    try {
      const { buildResumePdf } = await import("../lib/resumePdf");
      const sources = records.filter(record => draft.sourceIds.includes(record.id))
        .map(record => `${record.title} — ${record.source}`);
      buildResumePdf(profile.name, draft.text, sources).save("Sharleen-Paskalia-Tailored-CV.pdf");
    } catch {
      setError("The PDF could not be downloaded. Please try again.");
    } finally {
      setDownloading(false);
    }
  }

  const filtered = records.filter(record => [record.title, record.role, record.summary, ...record.tags, ...record.details]
    .join(" ").toLowerCase().includes(search.trim().toLowerCase()));

  return <>
    <section className="resume-studio" aria-label="Experience assistant">
      <div className="resume-tabs" role="group" aria-label="Choose a tool">
        <button type="button" aria-pressed={mode === "cv"} disabled={busy} onClick={() => { setMode("cv"); setError(""); }}>Tailor a CV</button>
        <button type="button" aria-pressed={mode === "chat"} disabled={busy} onClick={() => { setMode("chat"); setError(""); }}>Ask about my experience</button>
      </div>
      {!enabled && <p className="connection-note" role="status">CV drafts use keyword matching while the AI connection is being set up. Experience chat will be available once connected.</p>}
      <form onSubmit={submit}>
        <label htmlFor="experience-brief">{mode === "cv" ? "What would you like me to work on?" : "What would you like to know?"}</label>
        <textarea id="experience-brief" rows={mode === "cv" ? 6 : 3}
          value={input} onChange={event => mode === "cv" ? setBrief(event.target.value) : setQuestion(event.target.value)}
          aria-describedby="resume-word-count resume-input-warning" aria-invalid={Boolean(warning)}
          placeholder={mode === "cv" ? "Paste a job description or describe your project…" : "How has Sharleen supported early-stage ventures?"}
          disabled={busy} required />
        <div className="resume-input-meta">
          <p id="resume-input-warning" role="status">{warning}</p>
          <p id="resume-word-count">{words} / {wordLimit} words</p>
        </div>
        <div className="form-bottom">
          <p>{enabled ? "Your text is sent to OpenAI. Leave out confidential details and review the generated response before sharing." : "CV drafts draw on the experience library below."}</p>
          <button className="primary-action" type="submit" disabled={!available || busy || !input.trim() || Boolean(warning)}>
            {busy ? "Working…" : mode === "cv" ? "Create tailored CV" : "Ask question"} <Send size={16} aria-hidden />
          </button>
        </div>
      </form>
      {busy && <div className="resume-loading" role="status">
        <LoaderCircle size={21} aria-hidden />
        <div>
          <strong>{mode === "cv" ? "Preparing your tailored CV…" : "Preparing your answer…"}</strong>
          <p>Finding the most relevant experience. This may take a moment.</p>
        </div>
      </div>}
      {error && <p role="alert" className="form-error">{error}</p>}
      <div aria-busy={busy}>
        {mode === "cv" && draft && <section className="generated-result" aria-label="Tailored CV">
          <div className="result-actions"><h2>Tailored CV draft</h2>{draft.sourceIds.length > 0 && <button type="button" onClick={download} disabled={downloading}><Download size={16} aria-hidden /> {downloading ? "Preparing PDF…" : "Download PDF"}</button>}</div>
          <FormattedResponse text={draft.text} cv />
          <p className="result-note">{enabled ? "AI-generated. Review the draft against the evidence before sharing." : "Matched by keyword against the experience library."}</p>
          <Sources ids={draft.sourceIds} records={records} />
        </section>}
        {mode === "chat" && <section className="conversation" aria-label="Experience conversation" aria-live="polite">
          {conversation.map((message, index) => <article key={index} className={message.role === "user" ? "visitor-message" : "assistant-message"}>
            <h2>{message.role === "user" ? "You" : "Portfolio assistant"}</h2>
            {message.role === "assistant" ? <FormattedResponse text={message.content} /> : <p className="generated-text">{message.content}</p>}
            {message.sourceIds && <Sources ids={message.sourceIds} records={records} />}
          </article>)}
          {conversation.length > 0 && <button type="button" disabled={busy} onClick={() => setConversation([])}>Clear conversation</button>}
        </section>}
      </div>
    </section>
    <section className="evidence-library" aria-labelledby="evidence-title">
      <div className="library-heading"><h2 id="evidence-title">Experience library</h2>
        <label>Search experience<input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Try product, research, training…" /></label>
      </div>
      <div className="evidence-grid">
        {filtered.map(record => <article id={`evidence-${record.id}`} key={record.id}>
          <p className="meta">{[record.role, record.period].filter(Boolean).join(" · ")}</p>
          <h3>{record.title}</h3><p>{record.summary}</p>
          <details><summary>Read evidence <ArrowUpRight size={14} aria-hidden /></summary>
            <ul>{record.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
            <p className="meta">Source: {record.source}</p>
          </details>
        </article>)}
      </div>
      {!filtered.length && <p role="status">No matching experience. Try a broader term.</p>}
    </section>
  </>;
}

function FormattedResponse({ text, cv = false }: { text: string; cv?: boolean }) {
  const headings = /^(Sharleen Paskalia|Professional Summary|Selected Experience|Relevant Experience|Capabilities|Education|Evidence Gaps):?$/i;
  const bullet = /^(?:[-*•]|\d+[.)])\s+/;
  const lines = text.split(/\r?\n/);
  const blocks = [];

  for (let index = 0; index < lines.length; index++) {
    const key = index;
    const raw = lines[index].trim();
    const line = raw.replace(/^#{1,6}\s+/, "").replace(/\*\*/g, "");
    if (!line) continue;
    if (bullet.test(line)) {
      const items = [line.replace(bullet, "")];
      while (bullet.test(lines[index + 1]?.trim() ?? "")) {
        items.push(lines[++index].trim().replace(bullet, "").replace(/\*\*/g, ""));
      }
      blocks.push(<ul key={key}>{items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul>);
    } else if (headings.test(line) || /^#{1,6}\s/.test(raw) || (cv && bullet.test(lines[index + 1]?.trim() ?? ""))) {
      blocks.push(<h3 key={key}>{line.replace(/:$/, "")}</h3>);
    } else {
      blocks.push(<p key={key}>{line}</p>);
    }
  }
  return <div className="formatted-response">{blocks}</div>;
}

function Sources({ ids, records }: { ids: string[]; records: ExperienceRecord[] }) {
  return <div className="source-links" aria-label="Supporting evidence">
    {Array.from(new Set(ids)).map(id => {
      const record = records.find(item => item.id === id);
      return record ? <a key={id} href={`#evidence-${id}`}>{record.title}</a> : null;
    })}
  </div>;
}
