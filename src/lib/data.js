// import type { Skill, Project, Experience } from "./types";

export const developerInfo = {
  name: "Opeyemi Olalekan",
  role: "Frontend Developer",
  tagline: "Building digital experiences, one line of code at a time.",
  bio: "I’m a passionate frontend developer who loves building interactive, responsive, and user-focused web applications using React, Tailwind, and modern JavaScript tools. I thrive on solving complex problems and turning ideas into beautiful, functional products.",
  image: "/headshot.jpg",
  email: "opeyemiolalekan481@gmail.com",
  github: "https://github.com/olamilekan5162",
  linkedin: "https://linkedin.com/in/opeyemi-olalekan-10864523a",
  twitter: "https://x.com/olamilekan5162",
  resumeUrl: "/temitope.pdf",
};

export const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 70, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 98, category: "Frontend" },
  { name: "HTML5 & CSS3", level: 98, category: "Frontend" },
  {
    name: "State Management (Context Api)",
    level: 85,
    category: "Frontend",
  },
  { name: "Git & GitHub", level: 92, category: "Tools" },
  { name: "Vite / Webpack", level: 88, category: "Tools" },
  { name: "Figma", level: 75, category: "Tools" },
  { name: "Jest / Vitest", level: 80, category: "Tools" },
  { name: "Python / Django", level: 70, category: "Others" },
  { name: "Firebase", level: 75, category: "Others" },
  { name: "Supabase", level: 75, category: "Others" },
];

export const projects = [
  {
    title: "Qiuckpay App",
    description:
      "QuickPay is a micro-payment platform that allows small hustlers and vendors to generate instant payment links and share them with customers",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Context Api"],
    imageUrl: "/quickpay.png",
    liveUrl: "https://quickpay-app.netlify.app/",
    githubUrl: "https://github.com/olamilekan5162/quickpay-frontend",
  },
  {
    title: "Blockchain Real Estate Website",
    description:
      "PropaTradex is a blockchain-powered real estate platform that enables secure property sales and rentals without intermediaries",
    tags: ["React", "Tailwind", "Javascript", "Web3", "Iota move"],
    imageUrl: "/propatradex.png",
    liveUrl: "https://propatradex.vercel.app/",
    githubUrl: "https://github.com/olamilekan5162/propatradex2.0",
  },
  {
    title: "Pharmaceutical Inventory Management System",
    description:
      "EasiPharma is an Ai powered stock and inventory management system tailored for pharmaceutical businesses.",
    tags: ["React", "Javascript", "Gemini AI", "Firebase"],
    imageUrl: "/easipharma.png",
    liveUrl: "https://easi-pharma.vercel.app/",
    githubUrl: "https://github.com/olamilekan5162/EasiPharma",
  },
  {
    title: "Decentralised music platform",
    description:
      "VibeTrax is a decentralized music platform built on the Sui blockchain, enabling upcoming artists to release music without upfront capital, collaborate transparently, and earn fair, on-chain revenue.",
    tags: ["React", "Javascript", "Sui", "Blockchain"],
    imageUrl: "/vibetrax.png",
    liveUrl: "https://vibetrax-delta.vercel.app/",
    githubUrl: "https://github.com/olamilekan5162/vibetrax",
  },
];

export const experiences = [
  {
    role: "Frontend Developer",
    company: "LevelUp Inc.",
    period: "2025 - Present",
    description:
      "Contributing to the development and maintenance of an e-learning platform using React.js and TypeScript. Collaborate with the frontend team to implement new features, enhance UI performance, and ensure a smooth learning experience for users.",
  },
  {
    role: "Python Developer Intern",
    company: "Pauzii Techi",
    period: "2023",
    description:
      "Worked on Python projects while mentoring junior interns in Python basics and best practices. Gained hands-on experience in scripting, problem-solving, and collaborative development.",
  },
  {
    role: "Computer Instructor",
    company: "Radiant Glory School",
    period: "2022",
    description:
      "Designed and delivered interactive lesson plan. Taught foundational computer concepts, such as typing, mouse skills, and software applications",
  },
];
