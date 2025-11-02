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
    title: "Portfolio Website",
    description:
      "My personal portfolio website, built to showcase my skills and projects with a focus on simple and creative design.",
    tags: ["React", "Tailwind", "Javascript", "Context Api"],
    imageUrl:
      "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxlLWNvbW1lcmNlJTIwc2l0ZXxlbnwwfHx8fDE3NjE3MTkxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    liveUrl: "https://otemitope.vercel.app/",
    githubUrl: "https://github.com/olamilekan5162/oracle-portfolio",
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
    title: "E-learning App",
    description:
      "MathLab is a web-based application designed to help students practice and improve their math skills.",
    tags: ["React", "Firebase", "CSS3", "Gemini AI"],
    imageUrl: "/mathlab.png",
    liveUrl: "https://math-lab-theta.vercel.app/",
    githubUrl: "https://github.com/olamilekan5162/mathLab",
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
