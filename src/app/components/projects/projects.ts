import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Project {
  title: string;
  icon: string;
  context: string;
  description: string;
  tags: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './projects.html',
})
export class Projects {
  projects = signal<Project[]>([
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
  ]);
}
