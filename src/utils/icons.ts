import astro from "@svgs/tech/light/astro.svg";
import azure from "@svgs/tech/light/azure.svg";
import bash from "@svgs/tech/light/bash.svg";
import css from "@svgs/tech/light/css.svg";
import docker from "@svgs/tech/light/docker.svg";
import html from "@svgs/tech/light/html.svg";
import java from "@svgs/tech/light/java.svg";
import javascript from "@svgs/tech/light/js.svg";
import kubernetes from "@svgs/tech/light/kubernetes.svg";
import mongodb from "@svgs/tech/light/mongodb.svg";
import nestjs from "@svgs/tech/light/nestjs.svg";
import nextjs from "@svgs/tech/light/nextjs.svg";
import nodejs from "@svgs/tech/light/nodejs.svg";
import reactjs from "@svgs/tech/light/reactjs.svg";
import redis from "@svgs/tech/light/redis.svg";
import spring from "@svgs/tech/light/spring.svg";
import tailwind from "@svgs/tech/light/tailwind.svg";
import typescript from "@svgs/tech/light/typescript.svg";

// import BajajIcon from "@svgs/bajaj.svg";
// import AmgenIcon from "@svgs/amgen.svg";

import BajajLogo from "@assets/bajaj.png";
import AmgenLogo from "@assets/amgen.jpeg";

import LinkedinIcon from "@svgs/social/in.svg";
import MailIcon from "@svgs/social/gmail.svg";
import GithubIcon from "@svgs/social/github.svg";

export const icons = {
  // Programming Languages
  javascript: {
    Icon: javascript,
    name: "JavaScript"
  },
  typescript: {
    Icon: typescript,
    name: "TypeScript"
  },
  java: {
    Icon: java,
    name: "Java"
  },

  // Markup and Styling Languages
  html: {
    Icon: html,
    name: "HTML"
  },
  css: {
    Icon: css,
    name: "CSS"
  },

  // Frameworks and Libraries
  reactjs: {
    Icon: reactjs,
    name: "React"
  },
  nextjs: {
    Icon: nextjs,
    name: "Next.js"
  },
  astro: {
    Icon: astro,
    name: "Astro"
  },
  nestjs: {
    Icon: nestjs,
    name: "NestJS"
  },
  spring: {
    Icon: spring,
    name: "Spring"
  },
  tailwind: {
    Icon: tailwind,
    name: "Tailwind CSS"
  },

  // Runtime Environments
  nodejs: {
    Icon: nodejs,
    name: "Node.js"
  },

  // Databases
  mongodb: {
    Icon: mongodb,
    name: "MongoDB"
  },
  redis: {
    Icon: redis,
    name: "Redis"
  },

  // DevOps and Cloud
  docker: {
    Icon: docker,
    name: "Docker"
  },
  kubernetes: {
    Icon: kubernetes,
    name: "Kubernetes"
  },
  azure: {
    Icon: azure,
    name: "Azure"
  },

  // Shell Scripting
  bash: {
    Icon: bash,
    name: "Bash"
  }
};

export const languages = (["javascript", "typescript", "java"] as (keyof typeof icons)[]).map(k => icons[k]);

export const databases = (["mongodb", "redis"] as (keyof typeof icons)[]).map(k => icons[k]);

export const frameworks = (["reactjs", "nextjs", "spring", "nestjs", "tailwind", "astro"] as (keyof typeof icons)[]).map(
  k => icons[k]
);

export const devOps = (["docker", "kubernetes", "azure"] as (keyof typeof icons)[]).map(k => icons[k]);

export const shellScripting = (["bash"] as (keyof typeof icons)[]).map(k => icons[k]);

export const technologies = Object.values(icons) as { Icon: React.ElementType; DarkIcon?: React.ElementType; name: string }[];

export const companyLogos = {
  bajaj: BajajLogo,
  amgen: AmgenLogo
};

export const socialLogos = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  mail: MailIcon
};
