import { Github, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoAntd from "/public/images/logos/logo-antd.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoRedux from "/public/images/logos/logo-redux.svg";

import LogoUpwork from "/public/images/logos/logo-upwork.svg";


import ProjectMovieBox from "/public/images/movie-box.png";
import ProjectOneMobile from "/public/images/one-mobile.png";
import ProjectDevBlog from "/public/images/dev-blog.png";

import { ExperienceDetails, ProjectDetails, TechDetails } from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/khangle23078",
  GITHUB_REPO: "https://github.com/khangle23078?tab=repositories",
  LINKEDIN:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "Hero",
    href: "#hero",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skill",
    href: "#skill",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/khangle23078",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/khangle2307/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Redux",
    logo: LogoRedux,
    url: "https://redux-toolkit.js.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpress,
    url: "https://expressjs.com/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Ant design",
    logo: LogoAntd,
    url: "https://ant.design/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: "Upwork logo",
    position: "Independent Freelancer",
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      "Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.",
      "Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "OneMobile",
    description:
      "Building a ecommerce website for peoples want to shopping product smartphone",
    url: "https://www.onemobile.skin/",
    previewImage: ProjectOneMobile,
    technologies: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Ant design",
      "Express.js",
      "MongoDB",
      "Redux toolkit",
    ],
  },
  {
    name: "MovieBox",
    description:
      "Building a movie wiki website for peoples want to research information about movie",
    url: "https://movie-box-nextjs.vercel.app/",
    previewImage: ProjectMovieBox,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
    ],
  },
  {
    name: "Devblog",
    description:
      "Create a news website about esports so user can update information",
    url: "https://www.devblog.shop/",
    previewImage: ProjectDevBlog,
    technologies: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Ant design",
      "Express.js",
      "MongoDB",
      "Redux toolkit",
    ],
  },
];
