import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// DevTools Easter Egg Signature
// TODO: Add your personal dev-to-dev message here!
console.log(
  "%c[DevTools Easter Egg Placeholder]",
  "color: #a1a1aa; font-size: 14px; font-family: monospace; line-height: 1.6; padding: 10px;"
);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
