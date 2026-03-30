import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './about.html',
})
export class About {
  l = inject(LanguageService);
  readonly isVisible = signal(true);
}
