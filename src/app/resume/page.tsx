import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { ResumeStudio } from "../../components/ResumeStudio";
import { experienceRecords } from "../../data/experience";
import { profile } from "../../data/profile";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Resume | Sharleen Paskalia",
  description: "Explore Sharleen’s experience and build a role-specific CV from her documented work.",
};

export default function ResumePage() {
  const enabled = Boolean(process.env.OPENAI_API_KEY && process.env.OPENAI_MODEL);
  return <>
    <Header currentPage="resume" />
    <main className="shell resume-page">
      <h1>Tailor make my resume or chat about me with my agent</h1>
      <p className="resume-intro">Share a role, project, or collaboration you have in mind. Build a tailored CV or ask about Sharleen’s work.</p>
      <ResumeStudio enabled={enabled} records={experienceRecords} />
      <section className="resume-contact" aria-labelledby="resume-contact-title">
        <h2 id="resume-contact-title">Contact me</h2>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </section>
    </main>
  </>;
}
