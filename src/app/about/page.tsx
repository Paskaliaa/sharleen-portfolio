import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { profile } from "../../data/profile";
import { aboutIntroPhoto, chapters, educationAndCertifications } from "../../data/journey";
import type { PortfolioImage } from "../../data/projects";
import { workProjects } from "../../data/work";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Me | Sharleen Paskalia",
  description: "How Sharleen Paskalia works across education, software, and venture building.",
};

function StoryPhoto({ photo, portrait = false }: { photo?: PortfolioImage; portrait?: boolean }) {
  return <figure className={portrait ? styles.portrait : styles.photo} aria-hidden={photo ? undefined : true}>
    <div className={styles.photoSlot}>
      {photo && <Image src={photo.src} alt={photo.alt ?? ""} fill
        sizes="(max-width: 700px) 90vw, 430px" style={{ objectPosition: photo.position }} />}
    </div>
    {photo?.caption && <figcaption>{photo.caption}</figcaption>}
  </figure>;
}

export default function AboutPage() {
  return <>
    <Header currentPage="about" />
    <div className="shell">
      <main className="portfolio">
        <section className={styles.hero} aria-labelledby="about-title">
          <div>
            <h1 id="about-title" className={styles.label}>About Me</h1>
            <p className={styles.headline}>I see <mark>possibility</mark> in the <mark>learners</mark> I talk to, the <mark>educators</mark> I interact with, and the <mark>entrepreneurs</mark> I build alongside.</p>
            <p className={styles.lede}>There’s a fire in me to help them realise that possibility.</p>
          </div>
          <StoryPhoto photo={aboutIntroPhoto} portrait />
        </section>

        {chapters.map(chapter => <article key={chapter.title} className={styles.chapter}>
          <div>
            <h2>{chapter.title}</h2>
            {chapter.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <StoryPhoto photo={chapter.photo} />
        </article>)}

        <section className={styles.experience} aria-labelledby="experience-title">
          <h2 id="experience-title" className={styles.label}>Selected experience</h2>
          <dl>
            {workProjects.map(project => <div className={styles.experienceRow} key={project.id}>
              <dt>
                {project.title}
                <span>{project.cardRole?.title ?? project.role}</span>
                {project.timeline && <span>{project.timeline}</span>}
              </dt>
              <dd>{project.highlights[0]}</dd>
            </div>)}
          </dl>
        </section>
        <section className={styles.experience} aria-labelledby="education-title">
          <h2 id="education-title" className={styles.label}>Education & Certifications</h2>
          <dl>
            {educationAndCertifications.map(({ institution, credential, years }) => (
              <div className={styles.experienceRow} key={institution}>
                <dt>{institution}<span>{credential}</span></dt>
                <dd>{years}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <footer className={styles.footer}>
        <Link href="/">View selected work</Link>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin}>LinkedIn</a>
        <Link href="/resume">Resume</Link>
      </footer>
    </div>
  </>;
}
