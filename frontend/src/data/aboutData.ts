export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface ContactInfo {
  email: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface AboutData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  experience: ExperienceItem[];
  skills: string[];
}

export const aboutData: AboutData = {
  name: "Juan Manuel Flores Martin",
  title: "Full Stack Developer",
  summary: `Passionate developer with experience in building secure, scalable web applications. 
Skilled in React, Node.js, and modern web technologies. Always eager to learn and take on new challenges.`,
  contact: {
    email: "fmjuan89@gmail.com",
    location: "Newquay, UK",
    website: "secure-portfolio-phi.vercel.app/",
    linkedin: "linkedin.com/in/juanmanuelfloresdev",
    github: "github.com/coladero",
  },
  experience: [
    {
      role: "Breackfast chef",
      company: "Fistral beach hotel",
      period: "Dec 2024 - Present",
      details: [
        "Led morning service, managing time-critical tasks under high-pressure conditions.",
        "Developed strong multitasking and organizational skills transferable to tech projects.",
        "Demonstrated reliability, time management, and precision in fast-paced environments."
      ]
    },
    {
      role: "Full-stack Developer - Apprentice",
      company: "Auriga",
      period: "May 2022 – Sep 2022",
      details: [
    "Built a complete backend from scratch using Node.js and NestJS.",
    "Collaborated with frontend developers to deliver a production-ready application.",
    "Delivered code under tight deadlines and maintained high standards of code quality.",
    "Developed teamwork, task estimation, and ticket tracking skills using Agile practices.",
    "Worked with real-world business logic and solved performance issues in a collaborative setting."
      ]
    }
  ],
  skills: [
    "React", "TypeScript", "Node.js", "Tailwind CSS", "Express", "MongoDB", "Git", "Jest"
  ]
};