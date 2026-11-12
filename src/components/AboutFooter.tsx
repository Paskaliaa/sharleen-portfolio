"use client";

import { useState } from "react";
import { profile } from "../data/profile";

export function AboutFooter() {
  const [message, setMessage] = useState("");

  async function copyEmail() {
    if (!profile.email) return;
    try {
      await navigator.clipboard.writeText(profile.email);
      setMessage("Email copied");
    } catch {
      setMessage("Copy unavailable. Use the email link.");
    }
  }

  return <footer id="about" className="about">
    <h2>About</h2>
    <p>Sharleen Paskalia is a founder, trainer, and venture builder with a background in statistics. She founded QHAZI, designed and wrote code for Careers Lingo, and has worked across programme design, research, and early-stage venture support.</p>
    <div className="contact">
      {profile.email && <><a href={`mailto:${profile.email}`}>Email</a><button type="button" onClick={copyEmail}>Copy email</button></>}
      {profile.github && <a href={profile.github}>GitHub</a>}
      {profile.x && <a href={profile.x}>X</a>}
      <a href={profile.linkedin}>LinkedIn</a>
      <span role="status">{message}</span>
    </div>
  </footer>;
}
