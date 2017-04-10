import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy  } from '@angular/common';

import { AppComponent } from './app.component';
import { TemplateDrivenDemoComponent } from './template-driven/template-driven-demo.component';
import {appRouting} from "./app.routing";
import { IndexComponent } from './index.component';
import { TemplateDrivenUpdateDemoComponent } from './template-driven/template-driven-update-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenDemoComponent,
    IndexComponent,
    TemplateDrivenUpdateDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    appRouting
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
