import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { DatosResolver } from './components/project-detail/project-detail-resolver';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path: "", component: InicioComponent},
    {path: "inicio", component: InicioComponent},
    {path: "proyecto/:id", component: ProjectDetailComponent, 
        resolve: {
            project: DatosResolver
        }},
    {path: "contacto", component: ContactComponent}

    //{path: "**", redirectTo: "inicio"}
];
