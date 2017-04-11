import { Routes, RouterModule } from '@angular/router';
import {TemplateDrivenDemoComponent} from "./template-driven/template-driven-demo.component";
import {IndexComponent} from "./index.component";
import {TemplateDrivenUpdateDemoComponent} from "./template-driven/template-driven-update-demo.component";
import {ReactiveFormDemoComponent} from "./reactive/reactive-form-demo.component";
import {ReactiveUpdateComponent} from "./reactive/reactive-update.component";
import {ReactiveValidationComponent} from "./reactive/reactive-validation.component";
import {ReactiveValueChangesComponent} from "./reactive/reactive-value-changes.component";

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'template-driven-demo', component: TemplateDrivenDemoComponent },
    { path: 'template-driven-update-demo', component: TemplateDrivenUpdateDemoComponent },
    { path: 'reactive-demo', component: ReactiveFormDemoComponent },
    { path: 'reactive-update', component: ReactiveUpdateComponent },
    { path: 'reactive-validation', component: ReactiveValidationComponent },
    { path: 'reactive-value-changes', component: ReactiveValueChangesComponent }

];

export const appRouting = RouterModule.forRoot(routes);