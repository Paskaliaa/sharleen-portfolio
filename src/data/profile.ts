import type { PortfolioImage } from "./projects";

type Profile = {
  name: string;
  portrait?: PortfolioImage;
  linkedin: string;
  resume?: string;
  email?: string;
  github?: string;
  x?: string;
};

export const profile: Profile = {
  name: "Sharleen Paskalia",
  portrait: {
    src: "/images/sharleen-purple-outline.png",
    alt: "Portrait of Sharleen Paskalia",
  },
  linkedin: "https://www.linkedin.com/in/sharleen-paskalia-6398a51ab/",
};
