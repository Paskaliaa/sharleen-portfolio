import type { CaseStudy } from "./work";

export const educationReforms: CaseStudy = {
  id: "pwper",
  title: "Presidential Working Party on Education Reforms",
  role: "Data Coordinator and Analyst · Enumerator coordination and data quality oversight",
  partners: "Education Development Trust · Worked under Donovan Oman and alongside Eric Nyamuaro and Rosa Moraia",
  timeline: "2022–2023 · About six months · Completed",
  overview: [
    "Kenya’s Presidential Working Party consulted people across the country on the state of education and what needed to change. Education Development Trust was contracted to analyse public submissions, including emails, formal memoranda, handwritten notes, and questionnaires.",
    "I helped turn the submissions into a structured dataset and coordinated coding and quality review. The lead researcher used my summaries and visualisations when compiling the report.",
  ],
  contributions: [
    { title: "Data capture and coding", description: "I helped design the codebook and build Google Forms for consistent data entry. I coordinated the photographing and transcription of handwritten submissions." },
    { title: "Team coordination", description: "I helped recruit and coordinate about 100 data clerks and served as the main point of contact between them, the senior researcher, and the Working Party’s committees." },
    { title: "Quality and reporting", description: "I assigned reviewers, verified coded submissions, and prepared summaries and visualisations for the lead researcher." },
  ],
};

export const researchProjects = [
  { id: "potato", title: "Potato for Livelihoods Project · End-Term Evaluation", context: "Nakuru and Kericho", timeline: "2025", role: "Data Coordinator and Analyst", summary: "Helped develop evaluation questions, facilitated focus groups, conducted key informant interviews, and coordinated enumerators collecting data from farmers. Cleaned the data and shared preliminary analysis with the lead researcher." },
  { id: "msc", title: "Most Significant Change Documentation", context: "GCF/EnDev Kenya Project", timeline: "2024–2025", role: "Data Analyst", summary: "Analysed field data and wrote the documentation report." },
  { id: "girls", title: "Girls’ Transitions from School to Work", context: "Education Development Trust", timeline: "2022–2025", role: "Qualitative Data Collection and Cleaning", summary: "Conducted key informant interviews and cleaned the resulting data." },
  { id: "tea", title: "Our Tea, Our Voice · Women’s Leadership in the Tea Sector Baseline", context: "GIZ/GSDL", timeline: "2024", role: "Data Analyst", summary: "Analysed data for the baseline study on women’s leadership in the tea sector." },
  { id: "asal", title: "Enablers and Barriers to Quality Education in ASAL Counties", context: "Education Development Trust", timeline: "2024", role: "Enumerator", summary: "Collected field data on factors affecting access to quality education in Kenya’s arid and semi-arid counties." },
  { id: educationReforms.id, title: educationReforms.title, context: "Education Development Trust", timeline: "2022–2023", role: "Data Coordinator and Analyst, with Quality Oversight", summary: "Coordinated data clerks, supervised coding and quality review, and produced visualisations and summaries for the lead researcher." },
];
