import { Routes, RouterModule } from '@angular/router';
import {TemplateDrivenDemoComponent} from "./template-driven/template-driven-demo.component";
import {IndexComponent} from "./index.component";
import {TemplateDrivenUpdateDemoComponent} from "./template-driven/template-driven-update-demo.component";
import {ReactiveFormDemoComponent} from "./reactive/reactive-form-demo.component";
import {ReactiveUpdateComponent} from "./reactive/reactive-update.component";
import {ReactiveValidationComponent} from "./reactive/reactive-validation.component";
import {ReactiveValueChangesComponent} from "./reactive/reactive-value-changes.component";
import {InputDemoComponent} from "./input/input-demo.component";
import {InputListDemoComponent} from "./input/input-list-demo.component";
import {ReactiveAsyncValidationComponent} from "./reactive/reactive-async-validation.component";
import {TemplateDrivenValidationDemoComponent} from "./template-driven/template-driven-validation-demo.component";
import {TemplateDrivenAdvancedControlsComponent} from "./template-driven/template-driven-advanced-controls.component";

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'template-driven-demo', component: TemplateDrivenDemoComponent },
    { path: 'template-driven-update-demo', component: TemplateDrivenUpdateDemoComponent },
    { path: 'template-driven-validation-demo', component: TemplateDrivenValidationDemoComponent },
    { path: 'template-driven-advanced', component: TemplateDrivenAdvancedControlsComponent },
    { path: 'reactive-demo', component: ReactiveFormDemoComponent },
    { path: 'reactive-update', component: ReactiveUpdateComponent },
    { path: 'reactive-validation', component: ReactiveValidationComponent },
    { path: 'reactive-async-validation', component: ReactiveAsyncValidationComponent },
    { path: 'reactive-value-changes', component: ReactiveValueChangesComponent },
    { path: 'input-demo', component: InputDemoComponent },
    { path: 'input-list-demo', component: InputListDemoComponent }

];

export const appRouting = RouterModule.forRoot(routes);
