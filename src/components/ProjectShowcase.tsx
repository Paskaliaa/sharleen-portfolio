import Image from "next/image";
import type { Project } from "../data/projects";
import { MediaFrame } from "./MediaFrame";
import { ProjectModal } from "./ProjectModal";

export function ProjectShowcase({ project }: { project: Project }) {
  const credits = [...(project.collaborators ?? []), ...(project.stack ?? [])];
  return <article className="project" aria-labelledby={project.id}>
    <MediaFrame project={project} />
    <div className="project-copy">
      <div>
        <h3 id={project.id}>{project.title}</h3>
        <p className="meta">{[project.role, project.organisation, project.date].filter(Boolean).join(" · ")}</p>
        <p className="summary">{project.summary}</p>
        {credits.length > 0 && <p className="meta">{credits.join(" · ")}</p>}
      </div>
      <ProjectModal project={project} />
    </div>
    {project.images?.length ? <div className="gallery">{project.images.map(image =>
      <figure key={image.src}><div className="gallery-image"><Image src={image.src} alt={image.alt ?? ""} fill sizes="(max-width: 700px) 90vw, 500px" style={{objectPosition: image.position}} /></div>
        {image.caption && <figcaption>{image.caption}</figcaption>}
      </figure>
    )}</div> : null}
    {project.video && <video className="project-video" src={project.video.src} poster={project.video.poster} preload="none" controls playsInline />}
  </article>;
}