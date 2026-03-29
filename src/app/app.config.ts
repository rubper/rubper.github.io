import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { ArrowRight, BookOpen, Briefcase, Building2, ChevronRight, Code, Cpu, ExternalLink, FileCode, FileDown, Github, Languages, Laptop, Linkedin, LucideAngularModule, Mail, MapPin, Moon, PenTool, PieChart, Rocket, ShoppingCart, Sun, Target, Users, Utensils, User, Zap, Heart, Bolt } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(LucideAngularModule.pick({ Sun, Moon, Laptop, Github, Linkedin, Mail, ExternalLink, ChevronRight, FileDown, Code, Users, Rocket, Target, BookOpen, PenTool, ArrowRight, FileCode, Cpu, Briefcase, PieChart, Utensils, ShoppingCart, Building2, MapPin, Languages, User, Zap, Heart, Bolt }))
  ]
};
