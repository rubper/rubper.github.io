import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './experience.html',
})
export class Experience {
  l = inject(LanguageService);
}
