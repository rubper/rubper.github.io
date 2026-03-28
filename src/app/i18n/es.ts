import { Translations } from './en';

export const es: Translations = {
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
          'Mantenimiento y desarrollo de software de reportes y análisis para empresas de EE.UU. utilizando Angular 18, NestJS & Postgres, y PowerBI integrado como motor de reportes.',
          'Diseño y prototipado de UI de aplicaciones web, promoviendo el uso de Figma para el diseño de interfaces en los productos de la empresa.',
          'Implementación de modelos C4 para mejorar el diseño de arquitecturas de software en el desarrollo de nuevas características del sistema.',
          'Capacitación y mentoría de nuevos empleados en el área de desarrollo frontend, garantizando una inducción fluida y rápida integración en las operaciones.',
          'Mejora de los procesos de pruebas unitarias y e2e en el flujo de desarrollo de aplicaciones web, utilizando Jasmine, Jest & Playwright.',
          'Contribución en el desarrollo de la página de aterrizaje de la empresa utilizando Qwik Framework, Strapi CMS & Tailwind CSS.'
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
          'Desarrollo de software para una startup que permite a los restaurantes publicar y gestionar fácilmente sus menús en línea utilizando Angular 11.',
          'Implementación de diseños responsivos y elementos de UI personalizados utilizados en el desarrollo de las aplicaciones web.'
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
