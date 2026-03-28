# Copilot Instructions

## Project Context
This is a modern, static portfolio application for a Software Engineer (Ruben Perez), designed to be visually striking, modern, and simple enough to be deployed on GitHub Pages. It relies entirely on structural animations, glassmorphism, responsive designs, and clean topography to impress recruiters.

## Architectural Constraints
- **Framework**: Angular 18+ (Standalone Components ONLY).
- **State Management**: Heavily prefer **Signals** (`signal`, `computed`, `effect`) for reactive state. Use **RxJS** where necessary for streams (e.g., HTTP or complex events), but do NOT use NgRx or any heavy state library.
- **Styling**: **Pure Tailwind CSS**. Absolutely no component-level CSS files. All styling must be done via inline Tailwind utility classes in the `.html` templates.
- **Dark Mode**: Strictly `class`-based dark mode formatting (`dark:` prefix for all components). 
- **Icons**: Use `lucide-angular` for all iconography.

## File Naming & Structural Conventions
Do NOT use the old Angular `.component.*` suffix, as the Angular team is dropping file suffixes in favor of simpler names.
- Component structural files should be named simply: `[name].ts`, `[name].html`, and `[name].spec.ts` (e.g., `hero.ts`, `hero.html`).
- Class names should be identical to the component name, omitting the `Component` suffix (e.g., `export class Hero` instead of `export class HeroComponent`).
- Place related files inside an isolated folder: `src/app/components/[name]/`.

## Modern Angular Syntax
- Always use the new Angular Control Flow syntax (`@if`, `@for`, `@switch`, `@empty`) inside templates. 
- Use the `inject()` function for Dependency Injection instead of constructor injection.
- Do not use NgModules. Everything is standalone.

## UI/UX & Styling Guidelines (The "Vibe")
- **Emphasis on Details & Animations**: Use predefined custom Tailwind animations mapped in `tailwind.config.js` (`animate-fade-in`, `animate-fade-in-up`, `animate-glow-pulse`, `animate-float`) to keep interfaces feeling alive and interactive. 
- **Glassmorphism**: Freely use `backdrop-blur`, borders with low opacity (e.g., `border-zinc-200/50 dark:border-zinc-800/50`), and transparent backgrounds (`bg-white/70 dark:bg-black/40`).
- **Typography & Layout**: Maintain extremely clean, structured layouts (e.g., spacing with `max-w-5xl`, heavy use of grid/flex). 

## Code Quality
- Prefer readability and simplicity in `.ts` files, keeping most logic tightly scoped and pure.
- Avoid bulky lifecycle hooks unless necessary. Delegate reactive template changes directly through Angular Signals.
- **Clean Workspace**: Proactively clean up one-off scripts (like Node/Bash tools), temporary assets, and unused files as soon as their purpose is fulfilled to maintain a pristine project root, make sure these were created by a copilot agent.
