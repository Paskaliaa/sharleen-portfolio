import { jsPDF } from "jspdf";

const sectionLabels: Record<string, string> = {
  "summary": "Profile",
  "professional summary": "Profile",
  "profile": "Profile",
  "selected experience": "Experience",
  "relevant experience": "Experience",
  "experience": "Experience",
  "professional experience": "Experience",
  "projects & consultancies": "Projects & Consultancies",
  "capabilities": "Principles & Toolbox",
  "skills": "Principles & Toolbox",
  "principles & toolbox": "Principles & Toolbox",
  "education": "Education",
  "education & certifications": "Education & Certifications",
  "requirements not established by evidence": "Evidence Gaps",
  "evidence gaps": "Evidence Gaps",
};

export function buildResumePdf(name: string, draft: string, sources: string[]) {
  const pdf = new jsPDF({ unit: "pt", format: "letter" });
  pdf.setProperties({ title: `${name} — Tailored CV`, author: name });
  const left = 54;
  const column = 165;
  const right = 558;
  const top = 58;
  const bottom = 736;
  let y = top;
  let section = "Profile";

  function textLines(text: string, width: number, size: number, bold = false) {
    pdf.setFont("helvetica", bold ? "bold" : "normal");
    pdf.setFontSize(size);
    return pdf.splitTextToSize(text, width) as string[];
  }

  function drawLine(text: string, x: number, at: number, size: number, bold: boolean, color: string) {
    pdf.setFont("helvetica", bold ? "bold" : "normal");
    pdf.setFontSize(size);
    pdf.setTextColor(color);
    pdf.text(text, x, at);
  }

  function label(text: string, at: number) {
    textLines(text, column - left - 13, 9, true).forEach((line, index) =>
      drawLine(line, left, at + index * 11, 9, true, "#626262"));
  }

  function ensureSpace(height: number, continuation = true) {
    if (y + height <= bottom) return;
    pdf.addPage();
    y = top;
    if (continuation && section) label(section, y);
  }

  function heading(title: string) {
    if (pdf.getNumberOfPages() === 1) y = Math.max(y, top + 54);
    ensureSpace(60, false);
    pdf.setDrawColor("#D5D5D5");
    pdf.line(left, y, right, y);
    y += 18;
    section = title;
    label(title, y);
  }

  function paragraph(text: string, bullet = false, bold = false) {
    const size = bold ? 11.5 : 10.5;
    const inset = bullet ? 13 : 0;
    const lines = textLines(text, right - column - inset, size, bold);
    ensureSpace(Math.min(lines.length, 2) * 15 + 5);
    lines.forEach((line, index) => {
      ensureSpace(15);
      if (index === 0 && bullet) drawLine("•", column, y, size, false, "#333333");
      drawLine(line, column + inset, y, size, bold, "#333333");
      y += 15;
    });
    y += bold ? 5 : 4;
  }

  textLines(name, column - left - 12, 22, true).forEach((line, index) =>
    drawLine(line, left, top + 4 + index * 24, 22, true, "#202020"));

  const lines = draft.split(/\r?\n/);
  let started = false;
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index].trim().replace(/^#{1,6}\s+/, "").replace(/\*\*/g, "");
    if (!line) {
      if (started) y += 4;
      continue;
    }
    if (!started && line.toLowerCase() === name.toLowerCase()) continue;
    const title = sectionLabels[line.replace(/:$/, "").toLowerCase()];
    if (title === "Profile" && !started) continue;
    if (!started && title) y = Math.max(y, top + 54);
    started = true;
    if (title) {
      heading(title);
      continue;
    }
    const bullet = /^[-•*]\s+/.test(line);
    const roleHeading = !bullet && (section === "Experience" || section === "Projects & Consultancies")
      && (line.includes(" · ") || /^[-•*]\s+/.test(lines[index + 1]?.trim() ?? ""));
    paragraph(line.replace(/^[-•*]\s+/, ""), bullet, roleHeading);
  }

  if (sources.length) {
    y = Math.max(y, top + 54);
    heading("Evidence");
    sources.forEach(source => paragraph(source));
  }

  for (let page = 1; page <= pdf.getNumberOfPages(); page++) {
    pdf.setPage(page);
    drawLine(String(page), right - 9, 758, 8, false, "#626262");
  }
  return pdf;
}
