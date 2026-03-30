import { Translations } from './en';

export const es: Translations = {
  about: {
    title: '¿Quién soy?',
    intro: 'Soy <span class="font-semibold text-primary">Ruben Perez</span>, un Ingeniero de Software apasionado por crear soluciones elegantes, robustas y escalables. Mi enfoque combina excelencia técnica con un fuerte compromiso con la colaboración, la transparencia y el aprendizaje continuo.',
    points: [
      { icon: 'linkedin', text: 'Puedes contactarte conmigo en LinkedIn.' },
      { icon: 'zap', text: 'Impulsado por la curiosidad y el amor por el código limpio y mantenible.' },
      { icon: 'user', text: 'Trabajo en equipo, elevo a quienes me rodean. Mentorizando, compartiendo y siempre aprendiendo.' },
      { icon: 'bolt', text: 'Historial comprobado de entregar funcionalidades impactantes, rápido y de forma confiable.' },
      { icon: 'heart', text: 'Genuina preocupación por la experiencia de usuario, accesibilidad y calidad del producto.' }
    ],
    why: '<span class="font-semibold text-primary">¿Por qué yo?</span> Los reclutadores y equipos me eligen porque no solo escribo código—resuelvo problemas, promuevo una cultura positiva y ayudo a los equipos a lanzar productos que importan. Si buscas a alguien con habilidad técnica y un toque humano, conectemos.',
    icon: 'user',
    img: '/profile.jpg'
  },
  hero: {
    badge: 'Disponible para trabajar en remoto',
    titleStart: 'Construyendo',
    titleHighlight: 'plataformas',
    titleEnd: 'resilientes.',
    description: "Soy <strong class=\"font-bold text-zinc-900 dark:text-white\">Ruben Perez</strong>, Ingeniero de Software. Me dedico a conectar arquitecturas sofisticadas con experiencias de usuario excepcionales.",
    viewWork: 'Ver mi trabajo',
    downloadCv: 'Descargar CV'
  },
  experience: {
    titleStart: 'Trayectoria',
    titleHighlight: 'Profesional.',
    subtitle: 'Un historial comprobado en la ingeniería de plataformas escalables, optimización de arquitecturas y guía fluida de aplicaciones web.',
    activities: [
      {
        title: 'Ingeniero de Software',
        company: 'Cikume Software',
        location: 'San Salvador, El Salvador',
        period: 'Nov 2021 — Presente',
        contributions: [
          'Lideré plataformas de reportes/analítica para EE.UU. (Angular, NestJS, PowerBI).',
          'Impulsé UI/UX y sistemas de diseño con Figma.',
          'Elevé la arquitectura con modelos C4 y buenas prácticas.',
          'Mentoricé e integré ingenieros para alto rendimiento.',
          'Mejoré la calidad con automatización avanzada de pruebas.',
          'Pionero en landing sites de alto rendimiento (Qwik, Strapi, Tailwind).'
        ],
        techs: [
          { name: 'Angular 18', url: 'https://angular.dev' },
          { name: 'NestJS', url: 'https://nestjs.com' },
          { name: 'Postgres', url: 'https://www.postgresql.org' },
          { name: 'PowerBI', url: 'https://powerbi.microsoft.com' },
          { name: 'Figma', url: 'https://www.figma.com' },
          { name: 'Modelos C4', url: 'https://c4model.com' },
          { name: 'Jest', url: 'https://jestjs.io' },
          { name: 'Playwright', url: 'https://playwright.dev' },
          { name: 'Qwik', url: 'https://qwik.builder.io' },
          { name: 'Tailwind CSS', url: 'https://tailwindcss.com' }
        ]
      },
      {
        title: 'Ingeniero de Software Front-End',
        company: 'Calcula Tu Menu',
        location: 'Coruña, España',
        period: '2020 — Nov 2021',
        contributions: [
          'Construí SaaS para restaurantes: gestión de menús fácil (Angular 11).',
          'Entregué UI responsiva y componentes personalizados para experiencia superior.'
        ],
        techs: [
          { name: 'Angular 11', url: 'https://v11.angular.io' },
          { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
          { name: 'UI Responsiva' },
          { name: 'HTML/CSS', url: 'https://developer.mozilla.org/en-US/docs/Web' }
        ]
      }
    ]
  },
  projects: {
    title: 'Contribuciones Clave',
    subtitle: 'Decisiones arquitectónicas y logros significativos que definen mi trayectoria técnica.',
    list: [
      {
        title: 'Plataforma de Reportes y Análisis',
        icon: 'pie-chart',
        context: 'Cikume Software',
        description: 'Mantenimiento y desarrollo de software de reportes y análisis para empresas de EE.UU. Diseño de endpoints robustos en NestJS y UI en Angular 18, integrando sin problemas PowerBI embedded como motor de reportes subyacente.',
        tags: ['Angular 18', 'NestJS', 'Postgres', 'PowerBI'],

      },
      {
        title: 'Sitio Web de Alto Rendimiento',
        icon: 'rocket',
        context: 'Cikume Software',
        description: 'Contribución en el desarrollo del sitio web moderno de la empresa enfocado en SEO y rendimiento, utilizando frameworks de próxima generación y arquitecturas de Headless CMS.',
        tags: ['Qwik Framework', 'Strapi CMS', 'Tailwind CSS'],
      },
      {
        title: 'Software SaaS para Restaurantes',
        icon: 'utensils',
        context: 'Entorno de Startup',
        description: 'Desarrollo de software base para una startup que empodera a los restaurantes a publicar y administrar fácilmente sus menús en línea. Enfoque fuerte en elementos de interfaz personalizados y diseños responsivos y limpios.',
        tags: ['Angular 11', 'TypeScript', 'UI Responsiva'],
      },
      {
        title: 'Estrategia de UI y Arquitectura',
        icon: 'pen-tool',
        context: 'Cikume Software',
        description: 'Promoví el uso de modelos C4 para documentar y visualizar arquitecturas de software complejas. Combinado con prototipado de UI en Figma para mejorar la cohesión ingenieril y agilizar el desarrollo de funcionalidades.',
        tags: ['Modelos C4', 'Figma', 'Diseño UI'],
      }
    ]
  },
  contact: {
    titleStart: "Construyamos algo ",
    titleHighlight: "extraordinario",
    titleEnd: ".",
    description: "Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas un proyecto emocionante, un rol que encaje con mi perfil, o simplemente quieras charlar sobre arquitectura de software.",
    cta: "Saludar"
  }
};
