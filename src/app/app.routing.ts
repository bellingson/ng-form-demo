import { Routes, RouterModule } from '@angular/router';
import {TemplateDrivenDemoComponent} from "./template-driven/template-driven-demo.component";
import {IndexComponent} from "./index.component";

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'template-driven-demo', component: TemplateDrivenDemoComponent }
];

export const appRouting = RouterModule.forRoot(routes);