import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../components/Header";
import { CaseStudyDialog } from "../../components/CaseStudyDialog";
import { educationReforms, researchProjects } from "../../data/research";

export const metadata: Metadata = {
  title: "Research & Data Analysis | Sharleen Paskalia",
  description: "Six selected research and data analysis projects, including Kenya’s Presidential Working Party on Education Reforms.",
};

export default function ResearchPage() {
  return <>
    <Header currentPage="research" />
    <main className="shell research-page">
      <h1>Did I say I am a researcher?</h1>
      <p className="research-intro">Research I have contributed to…</p>
        <table className="research-table" role="table" aria-label="Research projects">
          <thead role="rowgroup"><tr role="row"><th scope="col">Project</th><th scope="col">Timeline</th><th scope="col">My role</th><th scope="col">What I did</th></tr></thead>
          <tbody role="rowgroup">
            {researchProjects.map(project => <tr key={project.id} role="row">
              <th scope="row" role="rowheader">
                {project.title}
                <span>{project.context}</span>
                {project.id === educationReforms.id && <CaseStudyDialog study={educationReforms} />}
              </th>
              <td role="cell">{project.timeline}</td><td role="cell">{project.role}</td><td role="cell">{project.summary}</td>
            </tr>)}
          </tbody>
        </table>
      <Link href="/" className="case-trigger research-link">Back to Work</Link>
    </main>
  </>;
}
