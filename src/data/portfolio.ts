export const profile = {
  name: "Saharier",
  email: "saharieriqbal0@gmail.com",
  github: "https://github.com/Saharier203",
  university: "United International University",
  degree: "BSc in Computer Science and Engineering",
  graduation: "2026",
  portrait: "/portrait.png",
};

export type Project = {
  title: string;
  context: string;
  description: string;
  note: string;
  tags: string[];
  kind: "inventory" | "recruitment" | "code" | "social" | "design" | "management";
};

export const researchTechnologies = [
  "Python",
  "Faster-Whisper",
  "OpenCV",
  "OpenCLIP",
  "vLLM",
  "LLMs",
  "scikit-learn",
];

export const supportingResearch = [
  {
    title: "Smart Poultry Farm",
    label: "Hardware & machine learning",
    description: "Exploring chicken health monitoring through the analysis of poultry droppings.",
    flow: ["Visual samples", "ML analysis", "Health monitoring"],
    note: "An academic hardware and machine learning project investigating poultry health monitoring. The workflow is conceptual; no health outcomes or model performance are claimed.",
  },
  {
    title: "Smart Solar Panel Cleaner",
    label: "Microprocessor course project",
    description: "An intelligent solar panel cleaning system incorporating machine learning.",
    flow: ["Solar panel", "Intelligent control", "Cleaning system"],
    note: "A microprocessor course project combining intelligent hardware and machine learning. The diagram illustrates scope, not a verified deployed architecture or efficiency result.",
  },
  {
    title: "Automated AI Shorts Generation Pipeline",
    label: "Personal project · Work in progress",
    description:
      "A local automated workflow for short-form video generation. The system works; output quality and consistency are still being improved.",
    flow: ["Local workflow", "AI automation", "Short-form video"],
    note: "This working personal automation project remains iterative. Output quality and consistency are active areas of improvement, rather than finished production guarantees.",
  },
];

export const software: Project[] = [
  {
    title: "Inventory Management Mobile Application",
    context: "Mobile App Development · Course project",
    description:
      "A mobile application project exploring inventory management, developed for the Mobile App Development course.",
    note: "This project is part of my mobile development coursework. The preview is illustrative; original application screens and further implementation details have not been supplied.",
    tags: [],
    kind: "inventory",
  },
  {
    title: "Job Recruitment Portal",
    context: "Web development · Academic project",
    description:
      "A recruitment-focused web project with an exam-based workflow, connecting the application process with candidate assessment.",
    note: "The confirmed project scope is a web portal with an examination-based recruitment workflow. The preview is an interface placeholder, not a screenshot of the original application.",
    tags: [],
    kind: "recruitment",
  },
  {
    title: "AI-Assisted Code Learning Platform",
    context: "Educational software",
    description:
      "An educational platform designed to support learning to code with AI-assisted coding support.",
    note: "The project explores the intersection of software development, coding education, and AI assistance. No undocumented model integration or learning outcomes are claimed.",
    tags: ["AI assistance"],
    kind: "code",
  },
  {
    title: "Social Media Application",
    context: "Advanced Object-Oriented Programming",
    description:
      "A desktop social media application developed with Java, JavaFX, and MySQL for Advanced Object-Oriented Programming.",
    note: "An academic application applying object-oriented programming in a social-media context. Java and JavaFX were used with MySQL; the interface shown is an illustrative placeholder.",
    tags: ["Java", "JavaFX", "MySQL"],
    kind: "social",
  },
];

export const designProjects: Project[] = [
  {
    title: "Job Portal UI/UX Design",
    context: "Interface design & prototyping",
    description: "Figma-based interface design and prototyping for a job portal experience.",
    note: "A UI/UX and prototyping project, not a fully implemented software product. The gallery preview is illustrative until the original Figma screens are available.",
    tags: ["Figma"],
    kind: "design",
  },
  {
    title: "Project Management & Benchmark Analysis",
    context: "Project management coursework",
    description:
      "Coursework involving project management, design coordination, and benchmark analysis.",
    note: "This coursework used Jira and Figma alongside benchmark analysis. The preview is not an actual project board, and no benchmark numbers or delivery outcomes are asserted.",
    tags: ["Jira", "Figma"],
    kind: "management",
  },
];

export const skills = {
  Programming: ["Python", "Java", "JavaScript", "C/C++", "SQL"],
  "AI & Machine Learning": [
    "YOLOv8",
    "OpenCV",
    "OpenCLIP",
    "Faster-Whisper",
    "vLLM",
    "scikit-learn",
  ],
  Development: ["React", "Next.js", "Django", "HTML", "CSS"],
  Tools: ["Git", "GitHub", "VS Code", "Google Colab", "Linux", "MySQL", "Figma", "Jira"],
};
