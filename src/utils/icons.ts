import astro from "@public/svgs/tech/light/astro.svg";
// import aws from "@public/svgs/tech/light/aws.svg";
import azure from "@public/svgs/tech/light/azure.svg";
import bash from "@public/svgs/tech/light/bash.svg";
import css from "@public/svgs/tech/light/css.svg";
import docker from "@public/svgs/tech/light/docker.svg";
import html from "@public/svgs/tech/light/html.svg";
import java from "@public/svgs/tech/light/java.svg";
import javascript from "@public/svgs/tech/light/js.svg";
import kubernetes from "@public/svgs/tech/light/kubernetes.svg";
import mongodb from "@public/svgs/tech/light/mongodb.svg";
import nestjs from "@public/svgs/tech/light/nestjs.svg";
import nextjs from "@public/svgs/tech/light/nextjs.svg";
import nodejs from "@public/svgs/tech/light/nodejs.svg";
import reactjs from "@public/svgs/tech/light/reactjs.svg";
import redis from "@public/svgs/tech/light/redis.svg";
import spring from "@public/svgs/tech/light/spring.svg";
import tailwind from "@public/svgs/tech/light/tailwind.svg";
import typescript from "@public/svgs/tech/light/typescript.svg";

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

export const technologies = Object.values(icons);
