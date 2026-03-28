import { Component, signal } from '@angular/core';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { ThemeToggle } from './components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Experience, Projects, Contact, ThemeToggle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-app');
}
