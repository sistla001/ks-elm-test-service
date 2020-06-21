import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { TestServiceModule } from './app/test-service.module';

if (environment.production) {
  // enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TestServiceModule)
  .catch(err => console.error(err));
