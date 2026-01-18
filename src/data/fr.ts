import type { PortfolioData } from "../types/portfolio";

export const fr: PortfolioData = {
  nav: {
    home: "Accueil",
    events: "Evénements",
    projects: "Projets",
    contact: "Contact",
  },

  buttons: {
    downloadResume: "Télécharger le CV",
    contactMe: "Me contacter",
  },

  hero: {
    name: "Reda Chemseddine",
    title: "Ingénieur Logiciel Full Stack",
    subtitle:
      "Spécialisé en .NET, Angular et Azure. Développement de solutions SaaS et intégration de fonctionnalités IA.",
  },

  about: {
    title: "À propos de moi",
    description: [
      "Ingénieur logiciel Full Stack spécialisé en .NET (C#), Angular et Azure, avec une expérience dans le développement de solutions web et mobiles sur mesure.",
      "J’ai contribué à des plateformes SaaS intégrant des pipelines CI/CD et des services cloud Azure.",
      "Je recherche un environnement stimulant me permettant de contribuer à des projets innovants et d’évoluer au sein d’une équipe technique solide.",
    ],
  },

  skills: {
    title: "Compétences techniques",
    categories: [
      {
        title: "Frontend",
        items: ["Angular (v15–20)", "TypeScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
      },
      {
        title: "Backend",
        items: [".NET (C# v6–9)", "APIs REST", "Entity Framework"],
      },
      {
        title: "Bases de données",
        items: ["SQL Server", "MySQL"],
      },
      {
        title: "Cloud & DevOps",
        items: [
          "Azure DevOps",
          "App Services",
          "Static Web Apps",
          "CI/CD Pipelines",
          "Docker",
        ],
      },
      {
        title: "Outils & Méthodes",
        items: ["Git/GitHub", "Scrum", "UML","Clickup","Slack"],
      },
      {
        title: "Bonus / IA",
        items: [
          "React",
          "Vue.js",
          "MongoDB",
          "Firebase",
          "Azure OpenAI",
          "Document Intelligence",
          "Reconnaissance vocale",
        ],
      },
    ],
  },

  experience: {
    title: "Expériences professionnelles",
    items: [
      {
        title: "Ingénieur Logiciel Full Stack – .NET | Angular | Azure",
        company: "Société de conseil & développement sur mesure",
        location: "Marrakech",
        date: "2024 – aujourd’hui",
        bullets: [
          "Conception et développement d’applications web et mobiles pour des clients français et marocains (commerce, industrie, finance).",
          "Co-développement d’une plateforme SaaS interne pour la gestion RH et comptable.",
          "Mise en place de pipelines CI/CD sur Azure (App Services, Static Web Apps).",
          "Intégration de fonctionnalités IA (Azure OpenAI, OCR Document Intelligence, Gemini).",
        ],
      },
      {
        title: "Présentation de projet – GITEX Africa 2025",
        company: "Plateforme SaaS RH & Comptabilité",
        location: "Marrakech",
        date: "Mai 2025",
        bullets: [
          "Présentation de la plateforme SaaS et de son impact métier.",
          "Échanges avec des investisseurs et experts internationaux.",
        ],
      },
      {
        title: "Stage de fin d’études",
        company: "Tanger Alliance (Marsa Maroc)",
        location: "Tanger",
        date: "Fév – Juin 2024",
        bullets: [
          "Développement d’une application interne pour automatiser la planification des opérations portuaires.",
        ],
        stack: ["Laravel", "Vue.js", "MySQL"],
      },
      {
        title: "Stagiaire Développeur Full Stack",
        company: "Agence SEOCOM",
        location: "Marrakech",
        date: "2023",
        bullets: [
          "Contribution à la plateforme SchoolOnline pour l’automatisation de la gestion scolaire.",
          "Développement d’interfaces pour la gestion des étudiants, enseignants et cours.",
        ],
        stack: ["Laravel", "React", "Tailwind CSS", "MySQL", "Figma", "Git/GitHub"],
      },
      {
        title: "Développeur Web Freelance",
        company: "Centre de beauté & bien-être",
        location: "Marrakech",
        date: "2022",
        bullets: [
          "Développement d’un système de prise de rendez-vous en ligne.",
        ],
        stack: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      },
      {
        title: "Stage d’initiation",
        company: "CMA CGM",
        location: "Agadir",
        date: "2021",
        bullets: [
          "Découverte du secteur maritime et des chaînes logistiques internationales.",
        ],
      },
    ],
  },

  events: {
    title: "Événements",
    items: [
      {
        title: "GITEX Africa 2025 – Présentation d’une plateforme SaaS",
        location: "Marrakech, Maroc",
        date: "Mai 2025",
        description: [
          "Présentation d’une plateforme SaaS interne dédiée à la gestion des ressources humaines et de la comptabilité lors du salon GITEX Africa 2025.",
          "Démonstration des fonctionnalités, de l’architecture technique et de l’impact métier auprès de professionnels, investisseurs et experts internationaux.",
          "Participation à des échanges autour de la transformation digitale et des solutions intégrant l’intelligence artificielle.",
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
    title: "Projets",
    items: [
      {
        name: "Applications sur mesure pour des clients francais et marocains",
        context: "Conseil / Développement",
        description: [
          "Conception et développement d’applications web et mobiles pour des clients français et marocains dans les secteurs du commerce, de l’industrie et de la finance",
          "Déploiement cloud et pipelines CI/CD sur Azure.",
          "Intégration de fonctionnalités IA (OCR, extraction intelligente).",
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
        name: "Plateforme SaaS RH & Comptabilité",
        context: "SaaS",
        description: [
          "Plateforme SaaS pour la gestion RH et comptable.",
          "Déploiement cloud et pipelines CI/CD sur Azure.",
          "Intégration de fonctionnalités IA (OCR, extraction intelligente).",
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
        name: "Application de planification portuaire",
        context: "Stage de fin d’études",
        description: [
          "Application interne pour automatiser la planification des opérations portuaires.",
        ],
        stack: ["Laravel", "Vue.js", "MySQL"],
        images: [
          "/projects/pfe/pfe-img1.jpg",
          "/projects/pfe/pfe-img2.jpg",
        ],
      },
      {
        name: "Système de prise de rendez-vous en ligne",
        context: "Freelance",
        description: [
          "Système de réservation de rendez-vous en ligne pour un centre de beauté et de bien-être.",
        ],
        stack: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      },
      {
        name: "SchoolOnline",
        context: "Stage",
        description: [
          "Plateforme de gestion des étudiants, enseignants, cours et départements.",
        ],
        stack: ["Laravel", "React", "Tailwind CSS", "MySQL", "Figma"],
      },

    ],
  },

  contact: {
    title: "Contact",
    subtitle: "Une collaboration ou une opportunité ? Contactez-moi.",
    locationLabel: "Localisation",
  },
};
