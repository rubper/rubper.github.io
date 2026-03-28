import { Component, inject } from '@angular/core';
import { Theme, ThemeMode } from '../../services/theme';
import { LucideAngularModule, Sun, Moon, Laptop } from 'lucide-angular';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './theme-toggle.html',
  styles: ``,
})
export class ThemeToggle {
  theme = inject(Theme);
  
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly Laptop = Laptop;

  setTheme(mode: ThemeMode) {
    this.theme.setMode(mode);
  }
}
