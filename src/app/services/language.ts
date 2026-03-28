import { computed, Injectable, signal } from '@angular/core';
import { en } from '../i18n/en';
import { es } from '../i18n/es';

export type Lang = 'en' | 'es';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = signal<Lang>('en');

  constructor() {
    const saved = localStorage.getItem('lang') as Lang;
    if (saved === 'en' || saved === 'es') {
      this.currentLang.set(saved);
    }
  }

  setLang(lang: Lang) {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }

  toggle() {
    this.setLang(this.currentLang() === 'en' ? 'es' : 'en');
  }

  lang = this.currentLang.asReadonly();

  // Computed signal that always returns the active dictionary
  t = computed(() => this.currentLang() === 'en' ? en : es);
}
