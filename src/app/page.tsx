import Image from "next/image";
import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { Header } from "../components/Header";
import { CaseStudyDialog } from "../components/CaseStudyDialog";
import { AboutFooter } from "../components/AboutFooter";
import { profile } from "../data/profile";
import { development, workProjects } from "../data/work";

export default function Home() {
  const portrait = profile.portrait;
  return <>
    <Header />
    <main className="shell portfolio">
        <section className="hero work-intro" aria-labelledby="intro">
          <div className="intro">
            <h1 id="intro" className="work-summary">Hello, my name is Sharleen.</h1>
            <div className="intro-copy">
              <p>I work in education, entrepreneurship, and innovation. I’m a researcher, accountant, and software developer by training.</p>
              <p>I’m <mark>passionate</mark> about <mark>people</mark> and <mark>possibility</mark>.</p>
              <p>In this season, I’m helping young people and organisations <mark>become</mark> the highest and truest expression of themselves.</p>
            </div>
            <p className="work-interests"><strong>Interests</strong> Venture Building, AI Education and People Development</p>
          </div>
          <figure className="portrait">
            <div className="portrait-slot" aria-hidden={portrait ? undefined : true}>
              {portrait && <Image src={portrait.src} alt={portrait.alt ?? "Portrait of Sharleen Paskalia"} fill preload sizes="(max-width: 700px) min(90vw, 360px), 480px" style={{ objectPosition: portrait.position }} />}
            </div>
            {portrait?.caption && <figcaption>{portrait.caption}</figcaption>}
          </figure>
        </section>

        <section className="featured-work" aria-labelledby="featured-title">
          <h2 className="work-label" id="featured-title">Featured Work</h2>
          <div className="work-card-grid">
            {workProjects.map(project => <article className="work-card" key={project.id}>
              <figure className="work-card-figure" aria-hidden={project.image ? undefined : true}>
                <div className="work-card-photo">
                  {project.image
                    ? <Image src={project.image.src} alt={project.image.alt ?? ""} fill sizes="(max-width: 700px) 240px, 360px" style={{ objectPosition: project.image.position, objectFit: project.image.fit }} />
                    : <ImageIcon size={26} strokeWidth={1.25} aria-hidden />}
                </div>
                {project.image?.caption && <figcaption>{project.image.caption}</figcaption>}
              </figure>
              <div className="work-card-copy">
                <h3>{project.cardRole?.title ?? project.role}</h3>
                <p className="work-card-context">{project.title}</p>
                <div className="work-card-meta">
                  {project.cardRole && <p>{project.cardRole.detail}</p>}
                  {project.timeline && <p>{project.timeline}</p>}
                </div>
                <ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
                <CaseStudyDialog study={project} card />
              </div>
            </article>)}
          </div>
        </section>

        <section className="founder-development" aria-labelledby="development-title">
          <h2 className="work-label" id="development-title">AI Training & Founder Development</h2>
          <dl className="development-list">
            {development.map(({ name, context, description }) => <div key={name}>
              <dt>{name}<span>{context}</span></dt>
              <dd>{description}</dd>
            </div>)}
          </dl>
          <Link className="case-trigger research-link" href="/research">Explore Research & Data Analysis</Link>
        </section>

      <AboutFooter />
    </main>
  </>;
}
