"use client";

import { useId, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import type { CaseStudy } from "../data/work";

export function CaseStudyDialog({ study, card = false }: { study: CaseStudy; card?: boolean }) {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  return <>
    <button type="button" className={card ? "case-trigger case-card-trigger" : "case-trigger"}
      aria-label={`View case study for ${study.title}`} aria-haspopup="dialog" aria-controls={id}
      ref={trigger} onClick={() => {
        dialog.current?.showModal();
        if (dialog.current) dialog.current.scrollTop = 0;
      }}>
      {card ? "View project" : "Read case study"} <ArrowUpRight size={16} aria-hidden />
    </button>
    <dialog className="work-dialog" id={id} ref={dialog} aria-labelledby={`${id}-title`}
      onClose={() => {
        dialog.current?.querySelectorAll("video").forEach(video => video.pause());
        trigger.current?.focus({ preventScroll: true });
      }}>
      <button className="work-dialog-close" type="button" autoFocus
        aria-label="Close case study" onClick={() => dialog.current?.close()}>
        <X size={20} aria-hidden /> Close
      </button>
      <h2 id={`${id}-title`}>{study.title}</h2>
      <div className="case-overview">
        <dl className="case-details">
          <div><dt>My Role</dt><dd>{study.role}</dd></div>
          {study.partners && <div><dt>Team or Project Partners</dt><dd>{study.partners}</dd></div>}
          {study.timeline && <div><dt>Timeline & Status</dt><dd>{study.timeline}</dd></div>}
        </dl>
        <section>
          <h3>Overview</h3>
          {study.overview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </section>
      </div>
      {study.photos?.length ? <div className="case-photos">
        {study.photos.map(photo => (
          <figure key={photo.src}>
            <div className="case-photo">
              <Image src={photo.src} alt={photo.alt ?? ""} fill sizes="(max-width: 700px) 90vw, 390px" />
            </div>
            {photo.caption && <figcaption>{photo.caption}</figcaption>}
          </figure>
        ))}
      </div> : null}
      {study.videos?.map(({ title, src, poster, captions }) => (
        <figure className="case-video" key={src}>
          <video className="project-video" src={src} poster={poster} controls playsInline preload="none" aria-label={title}>
            {captions && <track kind="captions" src={captions.src} srcLang={captions.language} label={captions.label} />}
            <a href={src}>Open {title}</a>
          </video>
          <figcaption>{title}</figcaption>
        </figure>
      ))}
      <section className="case-breakdown">
        <h3>My Contributions</h3>
        <dl>
          {study.contributions.map(({ title, description }) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}
        </dl>
      </section>
      {study.results && <section className="case-breakdown">
        <h3>{study.results.title}</h3>
        <ul>{study.results.items.map(item => <li key={item}>{item}</li>)}</ul>
      </section>}
    </dialog>
  </>;
}
