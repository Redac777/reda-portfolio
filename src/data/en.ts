import type { PortfolioData } from "../types/portfolio";

export const en: PortfolioData = {
  nav: {
    home: "Home",
    events: "Events",
    projects: "Projects",
    contact: "Contact",
  },
  buttons: {
    downloadResume: "Download Resume",
    contactMe: "Contact Me",
  },

  hero: {
    name: "Reda Chemseddine",
    title: "Full Stack Software Engineer",
    subtitle:
      "Specialized in .NET (C#), Angular, and Azure. I build SaaS solutions with CI/CD and integrate AI features (Azure OpenAI, Document Intelligence, Gemini).",
  },

  about: {
    title: "About Me",
    description: [
      "Full Stack Software Engineer specialized in .NET (C#), Angular, and Azure, with experience delivering custom web and mobile solutions.",
      "I have contributed to SaaS platforms with Azure DevOps pipelines and AI services integration.",
      "I’m looking for a stimulating environment where I can contribute to innovative projects and grow with a strong team.",
    ],
  },

  skills: {
    title: "Technical Skills",
    categories: [
      { title: "Frontend", items: ["Angular (v15–20)", "TypeScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
      { title: "Backend", items: [".NET (C# v6–9)", "REST APIs", "Entity Framework"] },
      { title: "Databases", items: ["SQL Server", "MySQL"] },
      { title: "Cloud & DevOps", items: ["Azure DevOps", "App Services", "Static Web Apps", "CI/CD Pipelines", "Docker"] },
      { title: "Tools & Methods", items: ["Git/GitHub", "Scrum", "UML"] },
      { title: "Bonus / AI", items: ["React", "Vue.js", "MongoDB", "Firebase", "Azure OpenAI", "Document Intelligence", "Speech recognition"] },
    ],
  },

  experience: {
    title: "Experience",
    items: [
      {
        title: "Full Stack Software Engineer – .NET | Angular | Azure",
        company: "Consulting & Custom Development Company",
        location: "Marrakech",
        date: "2024 – now",
        bullets: [
          "Designed and developed web and mobile applications for French and Moroccan clients (commerce, industry, finance).",
          "Co-developed an internal SaaS platform for HR and accounting using Angular (v15–20), .NET (v6–9), and SQL.",
          "Implemented CI/CD pipelines on Azure (App Services, Static Web Apps, Azure DevOps).",
          "Integrated AI features (Azure OpenAI, Document Intelligence OCR, Gemini extraction).",
        ],
      },
      {
        title: "Project Presentation – GITEX Africa 2025",
        company: "SaaS HR & Accounting Platform",
        location: "Marrakech",
        date: "May 2025",
        bullets: [
          "Presented the SaaS platform, showcasing features and business impact.",
          "Engaged with investors and international experts to strengthen project visibility.",
        ],
      },
      {
        title: "Final-Year Internship",
        company: "Tanger Alliance (Marsa Maroc)",
        location: "Tangier",
        date: "Feb – Jun 2024",
        bullets: [
          "Developed an internal application to automate port operations planning and resource allocation.",
        ],
        stack: ["Laravel", "Vue.js", "MySQL"],
      },
      {
        title: "Full Stack Developer Intern",
        company: "SEOCOM Agency",
        location: "Marrakech",
        date: "2023",
        bullets: [
          "Contributed to SchoolOnline platform for automating school operations.",
          "Built web interfaces for managing students, teachers, courses, and departments.",
        ],
        stack: ["Laravel", "React.js", "Tailwind CSS", "MySQL", "Figma", "Git/GitHub"],
      },
      {
        title: "Freelance Web Developer",
        company: "Beauty & Wellness Center",
        location: "Marrakech",
        date: "2022",
        bullets: ["Built an online appointment management system."],
        stack: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      },
      {
        title: "Introductory Internship",
        company: "CMA CGM",
        location: "Agadir",
        date: "2021",
        bullets: ["Discovered the maritime sector and gained insights into logistics and global supply chains."],
      },
    ],
  },

  events: {
    title: "Events",
    items: [
      {
        title: "GITEX Africa 2025 – SaaS Platform Presentation",
        location: "Marrakech, Morocco",
        date: "May 2025",
        description: [
          "Presented an internal SaaS platform for HR and accounting management at GITEX Africa 2025.",
          "Demonstrated product features, architecture, and business impact to professionals, investors, and international experts.",
          "Participated in discussions around digital transformation and AI-powered solutions.",
        ],
         images: [
          "/events/gitex/git-1.jpg",
          "/events/gitex/git-2.jpg",
          "/events/gitex/git-3.jpg",
        ],
      },
    ],
  },


  projects: {
    title: "Projects",
    items: [
      {
        name: "Consulting Apps for French and Moroccan Clients",
        context: "Consulting",
        description: [
          "Designed and developed web and mobile applications for French and Moroccan clients in commerce, industry, and finance",
          "CI/CD pipelines and cloud deployment on Azure.",
          "AI integration: text correction, OCR, intelligent extraction.",
        ],
        stack: ["Angular", ".NET", "SQL", "Azure DevOps", "Azure OpenAI", "Document Intelligence", "Gemini"],
        images: [
          "/projects/consulting/record/gescommun-img1.jpg",
          "/projects/consulting/record/reccsm-img2.jpg",
          "/projects/consulting/record/reccsm-img3.jpg",
          "/projects/consulting/record/recdoc-img1.jpg",
          "/projects/consulting/record/recdoc-img2.jpg",
          "/projects/consulting/record/recdoc-img3.jpg",
          "/projects/consulting/record/recmotor-img1.jpg",
          "/projects/consulting/record/recmotor-img2.jpg",
          "/projects/consulting/record/recmotor-img3.jpg",
          "/projects/consulting/record/recsafety-img2.jpg",
          "/projects/consulting/record/redsafety-img3.jpg",
        ],
      },
      {
        name: "SaaS HR & Accounting Platform",
        context: "SaaS ",
        description: [
          "SaaS platform for HR and accounting workflows.",
          "CI/CD pipelines and cloud deployment on Azure.",
          "AI integration: text correction, OCR, intelligent extraction.",
        ],
        stack: ["Angular", ".NET", "SQL", "Azure DevOps", "Azure OpenAI", "Document Intelligence", "Gemini"],
        images: [
          "/projects/saas/pv-1.jpg",
          "/projects/saas/pv-2.jpg",
          "/projects/saas/pv-3.jpg",
          "/projects/saas/pv-4.jpg",
        ],

      },
      {
        name: "Port Operations Planning App",
        context: "Final-Year Internship",
        description: [
          "Internal application to automate port operations planning and resource allocation.",
        ],
        stack: ["Laravel", "Vue.js", "MySQL"],
        images: [
          "/projects/pfe/pfe-img1.jpg",
          "/projects/pfe/pfe-img2.jpg",
        ],
      },
      {
        name: "Online Appointment System",
        context: "Freelance",
        description: [
          "Appointment booking system for a beauty and wellness center.",
        ],
        stack: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      },
      {
        name: "SchoolOnline",
        context: "Internship",
        description: [
          "Platform for managing students, teachers, courses, and departments.",
        ],
        stack: ["Laravel", "React", "Tailwind CSS", "MySQL", "Figma"],
      },
    ],
  },

  contact: {
    title: "Contact",
    subtitle: "Want to collaborate or have an opportunity? Send me a message.",
    locationLabel: "Location",
  },
};
