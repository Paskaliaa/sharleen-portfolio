import type { PortfolioImage } from "./projects";

type Chapter = {
  title: string;
  paragraphs: string[];
  photo?: PortfolioImage;
};

export const aboutIntroPhoto: PortfolioImage = {
  src: "/images/about/latitude59.jpg",
  alt: "Sharleen holding a Be Curious sign at Latitude59 Kenya",
  position: "center 62%",
};

export const educationAndCertifications = [
  { institution: "University of Nairobi", credential: "B.Sc., Statistics", years: "2020–2024" },
  { institution: "Strathmore University", credential: "CPA Studies, Section 4", years: "2020–2022" },
  { institution: "Kood/Nairobi", credential: "Diploma, Software Development", years: "2025–2026" },
  { institution: "STEM.ORG", credential: "Certified STEM Educator", years: "2023" },
  { institution: "ALX & Claude", credential: "AI Fundamentals", years: "2025" },
  { institution: "Technovation", credential: "AI Ventures Accelerator", years: "2026" },
  { institution: "Lean Project Management", credential: "Lean Project Management Foundation", years: "2026" },
];

export const chapters: Chapter[] = [
  {
    title: "Making things to learn",
    photo: {
      src: "/images/about/robotics-demonstration.jpg",
      alt: "Sharleen demonstrating a wheeled robot and block-based code",
      position: "center 43%",
    },
    paragraphs: [
      "Teaching coding and robotics made me think about what happens when learners get to build something themselves. At STEM Impact Center and Soma Siri Afrika, I moved from teaching learners directly to designing materials and training other instructors.",
      "On Project UWAZI, I asked instructors to pick a problem and work through the design process themselves. That gave them something concrete to draw on when they taught it.",
    ],
  },
  {
    title: "Building Careers Lingo",
    photo: {
      src: "/images/about/group-discussion.jpg",
      alt: "Sharleen in conversation with a small group seated in an auditorium",
      position: "67% center",
    },
    paragraphs: [
      "I founded QHAZI because career information was scattered and learners had limited access to guidance. I interviewed early users, designed and wrote code for the app, and helped turn labour market research into a handbook and career cards.",
      "Seeing teachers use those cards was a highlight for me. It showed me how the same research could be useful in a classroom and in a web app.",
    ],
  },
  {
    title: "Making it easier to get started",
    photo: {
      src: "/images/about/soma-siri-conversation.jpg",
      alt: "Sharleen speaking with a group while wearing a Soma Siri Afrika polo",
    },
    paragraphs: [
      "At Alliance High School, I helped set up an innovation hub where learners could test ideas and pitch them. One learner used AI to prototype a dormitory cleaning and monitoring system that the school began implementing.",
      "I’m curious about what it takes to help first-time builders get from a problem they recognise to something they can test. That’s where my interests in venture building, AI education, and people development meet.",
    ],
  },
];
