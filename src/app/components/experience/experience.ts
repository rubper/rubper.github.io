import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Tech {
  name: string;
  url?: string;
}

interface Activity {
  title: string;
  company: string;
  location: string;
  period: string;
  contributions: string[];
  techs: Tech[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './experience.html',
})
export class Experience {
  activities = signal<Activity[]>([
    {
      title: 'Software Engineer',
      company: 'Cikume Software',
      location: 'San Salvador, El Salvador',
      period: 'Nov 2021 — Present',
      contributions: [
        'Maintained and developed reporting and analytic software for US companies using Angular 18, NestJS & Postgres, and PowerBI embedded as backing reporting engine.',
        'Designed and prototyped web application UI and promoted the usage of Figma for UI design in the company’s products.',
        'Implemented C4 models to improve software architecture design in the development of new features for reporting software.',
        'Trained and mentored new hires in the frontend development area, ensuring a smooth onboarding process and rapid integration into company operations.',
        'Improved unit & e2e testing processes in the development workflow of web applications, using Jasmine, Jest & Playwright.',
        'Contributed to the development of the company’s landing website using Qwik Framework, Strapi CMS & Tailwind CSS.'
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
        'Developed startup software that allows restaurants to easily publish and manage their menus online using Angular 11.',
        'Implemented responsive designs and custom UI elements used in the development of web applications.'
      ],
      techs: [
        { name: 'Angular 11', url: 'https://v11.angular.io' },
        { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
        { name: 'Responsive UI' },
        { name: 'HTML/CSS', url: 'https://developer.mozilla.org/en-US/docs/Web' }
      ]
    }
  ]);
}
