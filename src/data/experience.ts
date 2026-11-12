import { development, workProjects } from "./work";
import { educationReforms, researchProjects } from "./research";

export type ExperienceRecord = {
  id: string;
  title: string;
  role: string;
  period?: string;
  summary: string;
  details: string[];
  source: string;
  tags: string[];
};

const workTags: Record<string, string[]> = {
  careers: ["software", "product", "venture", "coaching", "research"],
  alliance: ["training", "partnerships", "innovation", "fundraising", "entrepreneurship", "AI"],
  swc: ["venture", "facilitation", "strategy", "innovation"],
  soma: ["curriculum", "training", "operations", "finance", "partnerships"],
  stem: ["training", "robotics", "operations", "venture", "finance"],
};

export const experienceRecords: ExperienceRecord[] = [
  ...workProjects.map(project => ({
    id: project.id,
    title: project.title,
    role: project.role,
    period: project.timeline,
    summary: project.highlights[0],
    details: [...project.overview, ...project.contributions.map(item => item.description), ...(project.results?.items ?? [])],
    source: "Sharleen’s updated portfolio draft",
    tags: workTags[project.id] ?? [],
  })),
  ...researchProjects.map(project => ({
    id: project.id,
    title: project.title,
    role: project.role,
    period: project.timeline,
    summary: project.summary,
    details: project.id === educationReforms.id
      ? educationReforms.contributions.map(item => item.description)
      : [project.context],
    source: "Sharleen’s updated research portfolio draft",
    tags: project.id === educationReforms.id
      ? ["research", "data", "leadership", "quality assurance"]
      : ["research", "data", "analysis"],
  })),
  {
    id: "education", title: "Education and analytical background", role: "Bachelor of Science in Statistics",
    period: "2020–2024", summary: "Studied Statistics at the University of Nairobi.",
    details: ["Degree and transcripts supplied by Sharleen.", "CVs describe Excel, SPSS, SQL, and data visualisation experience."],
    source: "Degree, transcripts, and CVs", tags: ["statistics", "data", "research", "education"],
  },
  {
    id: "development", title: "AI Training & Founder Development", role: "Accelerator and training participant",
    summary: "Built and pitched an AI venture through Technovation and participated in founder and software development programmes.",
    details: development.map(item => `${item.name} (${item.context}). ${item.description}`),
    source: "Sharleen’s updated portfolio draft", tags: ["AI", "training", "software", "venture", "founder"],
  },
  {
    id: "leadership", title: "Leadership and service", role: "School captain and volunteer organiser",
    summary: "Early leadership, community service, and event coordination shaped Sharleen’s approach.",
    details: ["At Naivasha Girls, led 60 prefects in a school of about 1,200 learners and helped mobilise fundraising for a school bus.",
      "AYLF recognised logistics, communication, technical tasks, and teamwork for its 2023 leadership gathering.",
      "National Prayer Breakfast organisers recognised her volunteer contribution in a 2024 letter."],
    source: "Journey document and AYLF/NPB appreciation letters", tags: ["leadership", "operations", "communication", "events"],
  },
];
