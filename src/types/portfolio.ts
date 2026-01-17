export type SkillCategory = {
    title: string;
    items: string[];
};

export type Experience = {
    title: string;
    company: string;
    location: string;
    date: string;
    bullets: string[];
    stack?: string[];
};

export type Project = {
    name: string;
    context: string; // Internship / Freelance / SaaS
    description: string[];
    stack: string[];
    images?: string[]; //carousel
    links?: { label: string; url: string }[];
};

export type Event = {
    title: string;
    location: string;
    date: string;
    description: string[];
    images?: string[];
};

export type PortfolioData = {
    nav: {
        home: string;
        events: string;
        projects: string;
        contact: string;
    };
    buttons: {
        downloadResume: string;
        contactMe: string;
    };

    hero: {
        name: string;
        title: string;
        subtitle: string;
    };
    about: {
        title: string;
        description: string[];
    };
    skills: {
        title: string;
        categories: SkillCategory[];
    };
    experience: {
        title: string;
        items: Experience[];
    };
    events: {
        title: string;
        items: Event[];
    };
    projects: {
        title: string;
        items: Project[];
    };
    contact: {
        title: string;
        subtitle: string;
        locationLabel: string;
    };
};

