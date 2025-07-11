import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuHardHat, LuAtom, LuDatabase, LuGraduationCap, LuHardDrive } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
import mysSaas from "@/public/mys_saas.jpg";
import airflow from "@/public/airflow.png";
import cms from "@/public/cms.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University/College",
    location: "Davao, Philippines",
    description:
      "I graduated with a degree in Information Technology, embarking on a journey that led me to freelancing small projects while dedicating myself to self-learning. ",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Web and Mobile App Developer",
    location: "Davao, Philippines",
    description:
      "This time, focusing on web and mobile app development. I've particularly dived into front-end development, crafting interfaces and user experiences using technologies like Wordpress and Cordova Apache",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Part-Time Freelancer | Full-Time Construction Worker",
    location: "Tochigi, Japan",
    description:
      "Relocated to overseas, became a full-stack developer working as a part time freelancer. My stack includes Javascript, PHP and Python. Then, working a daily job as a construction worker in a Solar Panel company. I was able to learn the Japanese language and culture.",
    icon: React.createElement(LuHardHat),
    date: "2019 - 2022",
  },
  {
    title: "Software Application Engineer",
    location: "Davao, Philippines (Remote)",
    description:
      "I relocated back to my home country and subsequently secured a position as a Software Engineer with a prominent U.S.-based company . Within this role, I contributed to a dynamic team specializing in data engineering, where we managed substantial volumes of data and implemented automation solutions. During my tenure, I sharpened my expertise, with a specific focus on Python, database management, and cloud services..",
    icon: React.createElement(LuDatabase),
    date: "2022 - 2023",
  },
  {
    title: "Full Stack Developer",
    location: "Yokohama, Japan ",
    description:
      "Driven by my passion to return to Japan, I made the bold decision to leave a stable job in my home country and successfully accepted in a Japanese company. In my current role as a full stack developer, I specialize in utilizing tools such as React with TypeScript, Python, and AWS as our primary cloud service.",
    icon: React.createElement(LuAtom),
    date: "2023 - April 2025",
  },
  {
    title: "Software Engineer",
    location: "Yokohama, Japan ",
    description:
      "Started working as a Software Engineer in Japanese Company based in Yokohama, Japan. The business focuses on IoT development applications and more.",
    icon: React.createElement(LuHardDrive),
    date: "May 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "MYS Web and Mobile System",
    description:
      "A (SaaS) web system for managing employees and client records. It has features such as generating Legal Documents, Database, Navigation and Payroll management.",
    tags: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Amazon Web Services",
    ],
    imageUrl: mysSaas,
  },
  {
    title: "Google Composer Airflow (Automated Workflows)",
    description:
      "Had experience creating several CI/CD data pipelines as well as ETL data automations. Built for data analysis, reports, graphs, etc.",
    tags: [
      "Python",
      "ETL",
      "CI/CD Pipeline",
      "Google Cloud Platform",
      "Airflow",
      "SQL",
      "Google BigQuery",
    ],
    imageUrl: airflow,
  },
  {
    title: "Web Content Management System",
    description:
      "I created several CMS sites for clients using Wordpress (PHP) and Django, with features such as client details, blogs, navigations, payment integrations etc.",
    tags: ["PHP", "Wordpress", "HTML", "CSS", "Python", "Django"],
    imageUrl: cms,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  // "Node.js",
  "Git",
  "SQL",
  "PostgreSQL",
  "Python",
  "Django",
  "Tailwind",
  // "Prisma",
  // "MongoDB",
  "Tanstack Query",
  "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",

  "Framer Motion",
  "Material UI",
  "Mantine",
  "PHP",
  "BigQuery",
  "ETL",
  "Airflow",
  "Google Cloud",
  "AWS",
  "Cordova Apache",
  "React Native",
] as const;
