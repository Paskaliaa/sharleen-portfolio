export type PortfolioImage = { src: string; alt?: string; caption?: string; position?: string };
export type Project = {
  id: string;
  title: string;
  role: string;
  organisation: string;
  date?: string;
  summary: string;
  problem: string;
  contribution: string;
  outcome: string;
  preview: { title: string; tabs: { label: string; heading: string; detail: string }[] };
  images?: PortfolioImage[];
  demo?: { href: string; label: string };
  video?: { src: string; poster?: string };
  collaborators?: string[];
  stack?: string[];
};

export const projects: Project[] = [
  {
    id: "swc",
    title: "Industry–Academia Innovation Challenge",
    role: "Technical Lead",
    organisation: "SWC Summit · I Choose Life – Africa",
    date: "2026",
    summary: "Designed an innovation challenge where nine teams investigated real business problems.",
    problem: "Businesses brought operational and strategic questions that mixed teams of learners and faculty could investigate.",
    contribution: "I led the summit’s startup division and designed the challenge framework. I translated 10 business problems into validated briefs, supported team matching, and guided teams through problem definition and option assessment.",
    outcome: "Nine teams documented root causes and possible responses. Selected teams presented to delegates. The outputs provided a starting point for follow-up.",
    preview: { title: "The textile offcut challenge", tabs: [
      { label: "Problem", heading: "Where does fabric go to waste?", detail: "Offcuts from garment production accumulate and increase production costs." },
      { label: "Root causes", heading: "Follow the production process", detail: "Map how fabric is cut, sorted, stored, and reused. Identify where losses occur." },
      { label: "Options", heading: "Assess ways to reduce and reuse", detail: "Explore cutting optimisation, new products made from offcuts, and recycling feasibility." },
    ] },
  },
  {
    id: "careers",
    title: "Careers Lingo",
    role: "Co-founder & Product Development Lead",
    organisation: "Careers Lingo",
    date: "Started 2024",
    summary: "Built a career exploration product and developed a coaching service other coaches could deliver.",
    problem: "Learners wanted to revisit career choices as they learned more about themselves and their options.",
    contribution: "I helped take the product from concept to MVP and led the coaching service initially. I wrote a manual for the coaches who took over, starting with activities to build rapport.",
    outcome: "Ginna landed the executive PA role she had explored. Bella took a role at a maternal and early childhood startup that combines nursing and business development.",
    preview: { title: "Explore a career pathway", tabs: [
      { label: "People", heading: "People and business operations", detail: "Compare shadowing an operations lead with helping coordinate a short team project." },
      { label: "Health", heading: "Health and community programmes", detail: "Compare an informational interview at a clinic with volunteering on a community health initiative." },
      { label: "Technology", heading: "Product and digital services", detail: "Compare interviewing a product team with building a small prototype for a problem you know." },
    ] },
  },
  {
    id: "soma",
    title: "Soma Siri Afrika",
    role: "Product management, training & operations",
    organisation: "Soma Siri Afrika",
    date: "2022–2024",
    summary: "Connected developers and trainers while helping grow a coding programme.",
    problem: "What trainers observed during sessions needed to reach the people shaping the platform and curriculum.",
    contribution: "I worked across training, operations, and customer acquisition. As product manager, I bridged conversations between trainers and developers.",
    outcome: "My work included coding club delivery, facilitator coaching, and curriculum improvement.",
    preview: { title: "From trainer feedback to a decision", tabs: [
      { label: "Trainer feedback", heading: "Learners lose their place", detail: "Sample feedback. Learners returning to an exercise struggle to see which step they completed." },
      { label: "Product", heading: "Make progress visible", detail: "Sample requirement. Show the last completed step when learners reopen an exercise." },
      { label: "Curriculum", heading: "Add a recap to the next session", detail: "Sample teaching change. Ask learners to explain their last completed step before continuing." },
    ] },
  },
  {
    id: "stem",
    title: "STEM Impact Center",
    role: "STEM training, operations & venture support",
    organisation: "STEM Impact Center",
    summary: "Taught coding and robotics and helped early-stage companies work through operating decisions.",
    problem: "Learners needed practical STEM experiences, and participating ventures needed help with the decisions behind day-to-day operations.",
    contribution: "I took charge of training, operations, and customer acquisition. Through UNICEF’s Generation Unlimited initiative, I supported one company with financial planning, operating choices, cost savings, and understanding government requirements.",
    outcome: "The work combined hands-on STEM instruction with practical support for early-stage companies.",
    preview: { title: "Run a simple robotics sequence", tabs: [
      { label: "Start", heading: "Place the robot at the start", detail: "The robot begins in the top-left square facing right." },
      { label: "Forward", heading: "Move one square forward", detail: "The robot moves into the next square on the top row." },
      { label: "Turn + move", heading: "Turn right and move forward", detail: "The robot reaches the target one square below." },
    ] },
  },
];