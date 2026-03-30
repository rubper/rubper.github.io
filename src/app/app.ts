
import { LucideAngularModule } from 'lucide-angular';

import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { LangToggle } from './components/lang-toggle/lang-toggle';
import { Projects } from './components/projects/projects';
import { ThemeToggle } from './components/theme-toggle/theme-toggle';
import { About } from './components/about/about';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, About, Experience, Projects, Contact, ThemeToggle, LangToggle, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-app');
}
