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
import { ReactiveFormDemoComponent } from './reactive/reactive-form-demo.component';
import { ReactiveUpdateComponent } from './reactive/reactive-update.component';
import { ReactiveValidationComponent } from './reactive/reactive-validation.component';
import { ReactiveValueChangesComponent } from './reactive/reactive-value-changes.component';
import { InputDemoComponent } from './input/input-demo.component';
import { InputListDemoComponent } from './input/input-list-demo.component';
import { ReactiveAsyncValidationComponent } from './reactive/reactive-async-validation.component';
import {TemplateDrivenValidationDemoComponent} from "./template-driven/template-driven-validation-demo.component";
import {TemplateDrivenAdvancedControlsComponent} from "./template-driven/template-driven-advanced-controls.component";
import { NestedFormGroupComponent } from './reactive/nested-form-group.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenDemoComponent,
    IndexComponent,
    TemplateDrivenUpdateDemoComponent,
    ReactiveFormDemoComponent,
    ReactiveUpdateComponent,
    ReactiveValidationComponent,
    ReactiveValueChangesComponent,
    InputDemoComponent,
    InputListDemoComponent,
    ReactiveAsyncValidationComponent,
    TemplateDrivenValidationDemoComponent,
    TemplateDrivenAdvancedControlsComponent,
    NestedFormGroupComponent
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
