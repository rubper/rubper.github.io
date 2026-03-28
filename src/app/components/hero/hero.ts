import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
})
export class Hero {
  l = inject(LanguageService);
}
