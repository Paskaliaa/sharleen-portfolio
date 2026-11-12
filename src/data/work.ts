import type { PortfolioImage } from "./projects";

export type CaseStudy = {
  id: string;
  title: string;
  role: string;
  partners?: string;
  timeline?: string;
  overview: string[];
  contributions: { title: string; description: string }[];
  results?: { title: string; items: string[] };
  photos?: PortfolioImage[];
  videos?: {
    title: string;
    src: string;
    poster?: string;
    captions?: { src: string; language: string; label: string };
  }[];
};

export type WorkProject = CaseStudy & {
  cardRole?: { title: string; detail: string };
  highlights: string[];
  image?: PortfolioImage & { fit?: "contain" | "cover" };
};

export const workProjects: WorkProject[] = [
  {
    id: "careers",
    image: {
      src: "/images/work/careers-lingo-launch.jpg",
      alt: "Careers Lingo launch artwork showing the career exploration app on a laptop and phone",
      fit: "contain",
    },
    photos: [
      { src: "/images/work/careers-lingo-mobile.jpg", alt: "Careers Lingo mobile launch artwork showing career categories" },
      { src: "/images/work/careers-lingo-conversation.jpg", alt: "Sharleen wearing a Careers Lingo hoodie and speaking with a participant" },
    ],
    title: "Careers Lingo · QHAZI",
    role: "Founder",
    partners: "Team of 10",
    timeline: "March 2024–present · Ongoing",
    highlights: [
      "Designed and coded a career exploration app used by about 2,000 people.",
      "Reached about 20,000 learners overall and delivered more than 100 workshops.",
      "Generated more than KSh 2 million in revenue.",
    ],
    overview: [
      "I founded QHAZI to help learners in Kenya decide what to study and which careers to explore. Counselling was hard to access, career information was scattered, and schools had a limited pool of professionals they could invite to speak.",
      "I designed and wrote code for Careers Lingo. Our team built a web app, developed a handbook and career cards, and ran workshops in schools. We reached about 20,000 learners across the work.",
    ],
    contributions: [
      { title: "Software development and design", description: "I interviewed early users, designed the web app’s interface, and wrote code for it." },
      { title: "Research and career resources", description: "I researched Kenya’s labour market, spoke with people across industries, and helped turn the findings into a handbook and career cards. Seeing teachers use the cards was a personal highlight." },
      { title: "Programme delivery and team management", description: "I led school outreach and workshop delivery and recruited and managed a team of 10. I used short work samples to see how candidates approached tasks they would do on the team." },
    ],
    results: { title: "Results", items: [
      "About 20,000 learners reached overall, about 2,000 app users, more than 100 workshops, and more than KSh 2 million in revenue.",
      "At Career Week 2026, we brought together more than 200 learners and more than 30 professionals so learners could ask directly about their work and career paths.",
    ] },
  },
  {
    id: "alliance",
    image: {
      src: "/images/work/alliance-school.jpg",
      alt: "A learner speaking at a lectern in front of an audience at Alliance High School",
      position: "46% center",
    },
    videos: [{
      title: "Alliance High School Pitch Festival",
      src: "/videos/alliance-pitch-festival.mp4",
      poster: "/images/work/alliance-school.jpg",
    }],
    title: "Alliance High School Innovation & Entrepreneurship Hub",
    role: "Program Manager · Founder, QHAZI · Programme setup and delivery",
    cardRole: { title: "Program Manager", detail: "Founder, QHAZI · Programme setup and delivery" },
    partners: "Alliance High School, I Choose Life Africa, Samsung, Jamii Telecom, and Britam",
    timeline: "2025–2026 · Two pilots completed",
    highlights: [
      "Set up the school’s innovation hub and helped deliver two pitch festivals.",
      "The second pilot reached every Grade 10 learner.",
      "The school began implementing a learner-designed dormitory monitoring system.",
    ],
    overview: [
      "Alliance High School approached us through Careers Lingo to give learners more opportunities to test ideas, work through setbacks, and solve practical problems.",
      "We set up an innovation hub and ran two pilots. About 100 learners participated in 2025, and the school made the programme mandatory for all Grade 10 learners in 2026.",
    ],
    contributions: [
      { title: "Programme design and school coordination", description: "I spoke with learners about their ideas, worked with teachers to make time in the school schedule, and brought school leaders and alumni into the programme." },
      { title: "Fundraising and pitch festivals", description: "I mobilised sponsors and judges and helped deliver two pitch festivals." },
    ],
    results: { title: "Results", items: [
      "About 30 learners were actively developing ideas.",
      "The school began implementing a dormitory cleaning and monitoring system that a learner designed and prototyped using AI.",
    ] },
  },
  {
    id: "swc",
    image: {
      src: "/images/work/venture-builder.jpg",
      alt: "Sharleen speaking into a microphone in a red Careers Lingo polo",
      position: "48% center",
    },
    title: "Startup–University Hackathon · Sustainable World Corporation Summit",
    role: "Technical Startup Lead · Venture-building support",
    cardRole: { title: "Technical Startup Lead", detail: "Venture-building support" },
    partners: "I Choose Life Africa · Dr Hilda Muteshi, Ian Mwiga, and Mike Mutingi",
    timeline: "December 2023–February 2024 · Completed",
    highlights: [
      "Assessed early-stage ventures and reviewed problem statements with founders.",
      "Matched startups with university teams and helped them develop solutions before the summit.",
    ],
    overview: [
      "I led the startup side of a three-month programme that helped founders identify pressing business challenges and work with university teams to develop solutions for the summit hackathon.",
      "I helped turn founders’ challenges into briefs and brought the teams together ahead of the summit. Founders, lecturers, and learners presented their proposed solutions at the hackathon.",
    ],
    contributions: [
      { title: "Venture assessment", description: "Dr Hilda Muteshi and I assessed the startups, drafted problem statements, and reviewed them with the founders." },
      { title: "Team matching and facilitation", description: "Each university nominated one lecturer and two learners. I helped match them with ventures based on the problem, the lecturer’s expertise, and the learners’ fields of study." },
    ],
    results: { title: "Outcome", items: ["Teams presented their proposed solutions at the summit. We encouraged them to continue collaborating afterwards."] },
  },
  {
    id: "soma",
    image: {
      src: "/images/work/soma-siri-group.jpg",
      alt: "Sharleen and the Soma Siri Afrika group posing outdoors in orange shirts",
      fit: "contain",
    },
    title: "Soma Siri Afrika · Coding, Robotics & Project UWAZI",
    role: "Coding and Robotics Trainer · Deputy to the founder on Project UWAZI · Promoted into Partnerships, Development, and Finance",
    cardRole: {
      title: "Coding and Robotics Trainer",
      detail: "Deputy to the founder on Project UWAZI · Promoted into Partnerships, Development, and Finance",
    },
    timeline: "Approximately July 2022–early 2024 · Completed",
    highlights: [
      "Helped run coding and robotics clubs across about 20 Nairobi schools.",
      "Developed a curriculum and trainer manual and trained instructors.",
      "Helped lead Project UWAZI across delivery, evaluation, partnerships, and finance.",
    ],
    overview: [
      "I joined as Soma Siri Afrika expanded from music and languages into coding and robotics. I helped set up and run school clubs and equipped instructors to teach coding.",
      "In May 2023, I began supporting the founder on Project UWAZI, a grant-funded programme that taught learners to use human-centred design to solve problems. Learners presented their solutions at Kenya Innovation Week.",
    ],
    contributions: [
      { title: "Curriculum and trainer development", description: "I researched computer science teaching and adult learning, developed a curriculum and trainer manual, and trained music and language instructors to teach coding. For UWAZI, I designed hands-on training where instructors worked through the design thinking process themselves." },
      { title: "Programme operations and evaluation", description: "I taught learners directly, supported trainers across hubs, and set reporting metrics to track programme and learner progress." },
      { title: "Finance and partnerships", description: "I monitored spending and payments, adjusted resources, recruited judges, approached sponsors, and invited parents to see the programme ahead of a paid cohort. I developed relationships with WISE KE and Education Development Trust." },
    ],
    results: { title: "Highlights", items: [
      "I took the programme’s work to the Metis Reimagined Ed Summit. Learners presented their solutions at Kenya Innovation Week.",
      "I was promoted into Partnerships, Development, and Finance, where I supported company growth and financial sustainability.",
    ] },
  },
  {
    id: "stem",
    image: {
      src: "/images/work/stem-robotics.jpg",
      alt: "Sharleen seated beside robots and a laptop running block-based code",
      position: "center 48%",
    },
    title: "STEM Impact Center",
    role: "Programme operations, trainer development, and venture support",
    cardRole: { title: "Programme Operations", detail: "Trainer development and venture support" },
    partners: "Worked alongside the founder and a growing team of trainers",
    highlights: [
      "Ran school demos and helped grow coding and robotics delivery.",
      "Trained instructors and coordinated shared robotics kits across schools.",
      "Supported early-stage ventures through prototyping and pitching.",
    ],
    overview: [
      "I helped grow school coding and robotics programmes and supported early-stage ventures as they turned ideas into products, often through hardware prototypes.",
      "As the team grew, I moved from teaching learners directly to training instructors and coordinating delivery across schools.",
    ],
    contributions: [
      { title: "School partnerships and operations", description: "I ran demos, pitched programmes to schools, and helped close deals. I scheduled lessons so schools could share a limited supply of robotics kits." },
      { title: "Venture building and finance", description: "I supported founders in UNICEF Generation Unlimited incubation as they defined products, found early users, built and tested prototypes, recruited initial team members, and prepared pitches. I drew on my accounting background to help them organise finances and operations." },
      { title: "Events and fundraising", description: "I helped deliver Maker Camp, holiday boot camps, and the first World Robot Olympiad edition the centre supported. My work included fundraising, marketing, school recruitment, logistics, and learner preparation." },
    ],
  },
];

export const development = [
  { name: "Technovation AI Ventures Accelerator", context: "2026", description: "I built and pitched an AI venture and was invited to join Technovation’s venture community. I saw how the curriculum helped first-time builders grasp complex ideas and get to a prototype they could test quickly." },
  { name: "//kood", context: "Peer-to-peer software development · 2026", description: "I learned in a peer-led setting where learners studied together, built projects, and presented their work." },
  { name: "Standard Chartered Women in Tech Accelerator", context: "Top 15 finalist", description: "I spent three months receiving venture-building support and building relationships with other founders. It showed me where structured support helps and where teams need guidance specific to their venture." },
  { name: "ALX Founder Academy", context: "Participant", description: "I took part in ALX’s founder development programme." },
];

