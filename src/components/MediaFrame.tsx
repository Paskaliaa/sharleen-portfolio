"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Bot, Flag } from "lucide-react";
import type { Project } from "../data/projects";

export function MediaFrame({ project }: { project: Project }) {
  const [step, setStep] = useState(0);
  const reduce = useReducedMotion();
  const current = project.preview.tabs[step];
  const robotCell = [0, 1, 4][step];

  return <div className={`media media-${project.id}`}>
    <div className="preview-menu">
      <span className="preview-label">Interactive preview</span>
      <h4>{project.preview.title}</h4>
      <div className="preview-controls" role="group" aria-label={project.preview.title}>
        {project.preview.tabs.map((item, index) =>
          <button key={item.label} type="button" aria-pressed={step === index} onClick={() => setStep(index)}>
            {item.label}<ArrowRight size={15} aria-hidden />
          </button>
        )}
      </div>
    </div>
    <motion.div key={step} className="preview-panel" initial={reduce ? false : {opacity: 0.65, y: 5}}
      animate={{opacity: 1, y: 0}} transition={{type: "spring", stiffness: 300, damping: 30}}>
      {project.id === "stem" && <div className="robot-grid" aria-hidden="true">
        {Array.from({length: 6}, (_, cell) => <div key={cell}>{cell === robotCell ? <Bot size={22} /> : cell === 4 ? <Flag size={18} /> : null}</div>)}
      </div>}
      <div aria-live="polite"><h5>{current.heading}</h5><p>{current.detail}</p></div>
    </motion.div>
  </div>;
}