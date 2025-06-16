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
    website: "yourwebsite.com",
    linkedin: "linkedin.com/in/juanmanuelfloresdev",
    github: "github.com/coladero",
  },
  experience: [
    {
      role: "Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      details: [
        "Developed modern, responsive UIs with React and Tailwind CSS.",
        "Collaborated with backend teams to integrate REST APIs.",
        "Focused on accessibility and performance."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Startup Inc.",
      period: "2021 - 2022",
      details: [
        "Built reusable components and improved code quality.",
        "Participated in agile development and code reviews."
      ]
    }
  ],
  skills: [
    "React", "TypeScript", "Node.js", "Tailwind CSS", "Express", "MongoDB", "Git", "Jest"
  ]
};