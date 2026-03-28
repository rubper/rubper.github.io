import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Sun, Moon, Laptop, Github, Linkedin, Mail, ExternalLink, ChevronRight, FileDown, Code, Users, Rocket, Target, BookOpen, PenTool, ArrowRight, FileCode, Cpu, Briefcase, PieChart, Utensils, ShoppingCart, Building2, MapPin } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(LucideAngularModule.pick({ Sun, Moon, Laptop, Github, Linkedin, Mail, ExternalLink, ChevronRight, FileDown, Code, Users, Rocket, Target, BookOpen, PenTool, ArrowRight, FileCode, Cpu, Briefcase, PieChart, Utensils, ShoppingCart, Building2, MapPin }))
  ]
};
