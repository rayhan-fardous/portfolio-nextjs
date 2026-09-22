import { projects } from "@/data/projects";

export const defaultContent = {
  hero: {
    firstName: "Md Rayhan", lastName: "ul Fardous", roles: ["Full Stack Developer", "MERN Stack Engineer", "Next.js Specialist"],
    headline: "Building fast, scalable & beautiful web experiences that users love.",
    description: "Specializing in modern web technologies — from pixel-perfect UIs to robust backends. I transform complex ideas into clean, high-performance digital products.",
    image: "/rayhan.jpg", resumeUrl: "https://drive.google.com/file/d/13xzNfAbTDsvgkufql0RcAVoX7w-rQaAX/view"
  },
  about: {
    title: "Crafting Scalable Web Applications",
    paragraphs: [
      "My journey in software development is driven by a deep passion for transforming complex ideas into intuitive, high-performance web applications. I specialize in the modern web stack—building scalable frontends with Next.js & React, and architecting robust backends using Node.js, Express & MongoDB.",
      "I strongly believe that good software goes beyond functional code—it requires clean architecture, seamless visual design, and optimal performance. I strive for code maintainability, rigorous debugging, and writing modular components that scale effortlessly over time.",
      "With a continuous learning mindset, I consistently explore emerging web technologies, UI/UX trends, and system design practices. My goal is to build impactful, user-focused products and collaborate with forward-thinking engineering teams to create remarkable digital solutions."
    ]
  },
  skills: [
    { id: "frontend", title: "Frontend", description: "Crafting intuitive, responsive, and pixel-perfect user interfaces", skills: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "TypeScript" }, { name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }] },
    { id: "backend", title: "Backend", description: "Architecting robust server-side logic and secure APIs", skills: [{ name: "Node.js" }, { name: "Express.js" }, { name: "REST API" }, { name: "Authentication" }, { name: "JWT" }] },
    { id: "database", title: "Database", description: "Designing scalable data models and efficient queries", skills: [{ name: "MongoDB" }, { name: "PostgreSQL" }, { name: "Firebase" }] },
    { id: "tools", title: "Tools & Platforms", description: "Modern developer tooling, deployment platforms, and design tools", skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }, { name: "Vercel" }, { name: "Figma" }] }
  ],
  experience: [
    { id: "exp-1", category: "experience", type: "Experience", title: "Web Development Intern", organization: "Corporate Academy", location: "Mirpur, Dhaka", period: "Jan 2025 – May 2025", status: "Completed", description: "Supported the maintenance, enhancement, and deployment of company and client WordPress websites, delivering responsive interfaces and reliable production updates.", achievements: ["Maintained and enhanced company and client WordPress websites.", "Developed responsive interfaces with Elementor, HTML, CSS, and JavaScript."], technologies: ["WordPress", "Elementor", "PHP", "HTML", "CSS", "JavaScript"] },
    { id: "edu-1", category: "education", type: "Education", title: "B.Sc. in Computer Science & Engineering", organization: "American International University-Bangladesh", location: "Dhaka, Bangladesh", period: "August - 2024", status: "Completed", description: "Completed a rigorous Computer Science program focused on software engineering and modern web application development.", achievements: ["Completed capstone software project with distinction.", "Mastered OOP, relational database design, and algorithmic problem solving."], technologies: ["C++", "Java", "JavaScript", "Python", "SQL", "Git"] }
  ],
  projects,
};
