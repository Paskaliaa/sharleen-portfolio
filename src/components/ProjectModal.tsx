"use client";

import { useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "../data/projects";

export function ProjectModal({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <>
    <button className="explore" type="button" onClick={() => dialog.current?.showModal()}>
      Explore project <ArrowUpRight size={16} aria-hidden />
    </button>
    <dialog className="case-study" ref={dialog} aria-labelledby={`${project.id}-dialog-title`}>
      <button className="close" type="button" aria-label="Close case study" onClick={() => dialog.current?.close()}>
        <X size={22} aria-hidden />
      </button>
      <h2 id={`${project.id}-dialog-title`}>{project.title}</h2>
      <h3>The problem</h3><p>{project.problem}</p>
      <h3>My contribution</h3><p>{project.contribution}</p>
      <h3>What came out of it</h3><p>{project.outcome}</p>
      {project.demo && <a href={project.demo.href}>{project.demo.label}</a>}
    </dialog>
  </>;
}