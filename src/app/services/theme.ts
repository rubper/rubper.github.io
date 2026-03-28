import { effect, Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  // Use Signals for state management
  mode = signal<ThemeMode>('system');
  isDark = signal<boolean>(false);

  constructor() {
    this.initializeTheme();

    effect(() => {
      const currentMode = this.mode();
      localStorage.setItem('theme', currentMode);
      this.applyTheme(currentMode);
    });

    // Listen to system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.mode() === 'system') {
        this.applyTheme('system');
      }
    });
  }

  setMode(mode: ThemeMode) {
    this.mode.set(mode);
  }

  private initializeTheme() {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) {
      this.mode.set(savedTheme);
    } else {
      this.mode.set('system');
    }
  }

  private applyTheme(mode: ThemeMode) {
    const root = document.documentElement;
    let applyDark = false;

    if (mode === 'system') {
      applyDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      applyDark = mode === 'dark';
    }

    if (applyDark) {
      root.classList.add('dark');
      this.isDark.set(true);
    } else {
      root.classList.remove('dark');
      this.isDark.set(false);
    }
  }
}
