import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

export const routes: Routes = [
    {path: "", component: InicioComponent},
    {path: "inicio", component: InicioComponent},
    {path: "proyecto/:id", component: ProjectDetailComponent}

    //{path: "**", redirectTo: "inicio"}
];
