import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement, NgElementConfig } from '@angular/elements';
import { TestServiceComponent } from './test-service.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [BrowserModule],
  exports: [],
  declarations: [TestServiceComponent],
  providers: [],
  entryComponents: [TestServiceComponent]
})
export class TestServiceModule implements DoBootstrap {

  constructor(private injector: Injector) { }
  ngDoBootstrap(appRef: import('@angular/core').ApplicationRef): void {
    const elm = createCustomElement(TestServiceComponent, { injector: this.injector });
    customElements.define('app-elm-test', elm);
  }

}
