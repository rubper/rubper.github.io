import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './lang-toggle.html'
})
export class LangToggle {
  languageService = inject(LanguageService);
}
