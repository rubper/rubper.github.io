export interface ActivityTech { name: string; url?: string; }
export interface Activity { title: string; company: string; location: string; period: string; contributions: string[]; techs: ActivityTech[]; }
export interface Project { title: string; icon: string; context: string; description: string; tags: string[]; link?: string; }
export interface Dictionary {
  hero: { badge: string; titleStart: string; titleHighlight: string; titleEnd: string; description: string; viewWork: string; downloadCv: string; };
  experience: { titleStart: string; titleHighlight: string; subtitle: string; activities: Activity[]; };
  projects: { title: string; subtitle: string; list: Project[]; };
  contact: { titleStart: string; titleHighlight: string; titleEnd: string; description: string; cta: string; };
  about: {
    title: string;
    intro: string;
    points: { icon: string; text: string }[];
    why: string;
    icon: string;
    img: string;
  };
}

export const en: Dictionary = {
  about: {
    title: 'Who am I?',
    intro: 'I’m <span class="font-semibold text-primary">Ruben Perez</span>, a passionate Software Engineer who thrives on building elegant, robust, and scalable solutions. My approach blends technical excellence with a deep commitment to collaboration, transparency, and continuous learning.',
    points: [
      { icon: 'linkedin', text: 'Connect with me on LinkedIn.' },
      { icon: 'zap', text: 'Driven by curiosity and a love for clean, maintainable code.' },
      { icon: 'user', text: 'Team player who elevates those around me, mentoring, sharing, and always learning.' },
      { icon: 'bolt', text: 'Proven track record of delivering impactful features, fast and reliably.' },
      { icon: 'heart', text: 'Genuine care for user experience, accessibility, and product quality.' }
    ],
    why: '<span class="font-semibold text-primary">Why me?</span> Recruiters and teams choose me because I don’t just write code—I solve problems, foster positive culture, and help teams ship products that matter. If you want someone who brings both technical skill and human touch, let’s connect.',
    icon: 'user',
    img: '/profile.jpg'
  },
  hero: {
    badge: 'Available for remote opportunities',
    titleStart: 'Engineering',
    titleHighlight: 'resilient',
    titleEnd: 'platforms.',
    description: "I'm <strong class=\"font-bold text-zinc-900 dark:text-white\">Ruben Perez</strong>, a Software Engineer bridging the gap between sophisticated architectures and pristine user experiences.",
    viewWork: 'View My Work',
    downloadCv: 'Download Résumé'
  },
  experience: {
    titleStart: 'Professional',
    titleHighlight: 'Journey.',
    subtitle: 'A real track record of engineering scalable platforms, optimizing architectures, and seamlessly guiding web applications.',
    activities: [
      {
        title: 'Software Engineer',
        company: 'Cikume Software',
        location: 'San Salvador, El Salvador',
        period: 'Nov 2021 — Present',
        contributions: [
          'Built advanced analytics/reporting for US clients (Angular, NestJS, PowerBI).',
          'Led Figma-driven UI/UX and design system adoption.',
          'Elevated architecture with expert C4 modeling.',
          'Mentored and onboarded engineers to top performance.',
          'Boosted release quality with advanced test automation. (Playwright)',
          'Launched high-performance landing sites (Angular/Qwik, Strapi, Tailwind).'
        ],
        techs: [
          { name: 'Angular 18', url: 'https://angular.dev' },
          { name: 'NestJS', url: 'https://nestjs.com' },
          { name: 'Postgres', url: 'https://www.postgresql.org' },
          { name: 'PowerBI', url: 'https://powerbi.microsoft.com' },
          { name: 'Figma', url: 'https://www.figma.com' },
          { name: 'C4 Models', url: 'https://c4model.com' },
          { name: 'Jest', url: 'https://jestjs.io' },
          { name: 'Playwright', url: 'https://playwright.dev' },
          { name: 'Qwik', url: 'https://qwik.builder.io' },
          { name: 'Tailwind CSS', url: 'https://tailwindcss.com' }
        ]
      },
      {
        title: 'Front-End Software Engineer',
        company: 'Calcula Tu Menu',
        location: 'Coruña, Spain',
        period: '2020 — Nov 2021',
        contributions: [
          'Built SaaS for restaurants to easily manage menus (Angular 11).',
          'Delivered responsive UI and custom components for seamless user experience.'
        ],
        techs: [
          { name: 'Angular 11', url: 'https://v11.angular.io' },
          { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
          { name: 'Responsive UI' },
          { name: 'HTML/CSS', url: 'https://developer.mozilla.org/en-US/docs/Web' }
        ]
      }
    ]
  },
  projects: {
    title: 'Key Contributions',
    subtitle: 'Architectural decisions and significant project milestones defining my technical journey.',
    list: [
      {
        title: 'Reporting & Analytics Platform',
        icon: 'pie-chart',
        context: 'Cikume Software',
        description: 'Maintained and developed reporting and analytic software for US companies. Engineered robust NestJS endpoints and an Angular 18 UI, seamlessly integrating PowerBI embedded as the backing reporting engine.',
        tags: ['Angular 18', 'NestJS', 'Postgres', 'PowerBI'],

      },
      {
        title: 'High-Performance Landing Site',
        icon: 'rocket',
        context: 'Cikume Software',
        description: 'Contributed to the development of the company’s modern landing website focused on SEO and performance, utilizing next-generation frameworks and head-less CMS architectures.',
        tags: ['Qwik Framework', 'Strapi CMS', 'Tailwind CSS'],
      },
      {
        title: 'Calcula Tu Menu SaaS',
        icon: 'utensils',
        context: 'Startup Environment',
        description: 'Developed foundational startup software that empowers restaurants to easily publish and manage their menus online. Focused heavily on custom UI elements and clean responsive designs.',
        tags: ['Angular 11', 'TypeScript', 'Responsive UI'],
      },
      {
        title: 'UI & Architecture Strategy',
        icon: 'pen-tool',
        context: 'Cikume Software',
        description: 'Championed the use of C4 models to document and visualize complex software architecture. Paired with UI prototyping in Figma to enhance engineering cohesion and streamline feature development.',
        tags: ['C4 Models', 'Figma', 'UI Design'],
      }
    ]
  },
  contact: {
    titleStart: "Let's build something ",
    titleHighlight: "extraordinary",
    titleEnd: ".",
    description: "I'm currently open to new opportunities. Whether you have an exciting project, a role that fits my profile, or just want to chat about architecture.",
    cta: "Say Hello"
  }
};

export type Translations = Dictionary;
