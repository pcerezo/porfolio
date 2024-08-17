import { Component } from '@angular/core';
import { WelcomeComponent } from "../welcome/welcome.component";
import { ProjectsComponent } from "../projects/projects.component";
import { AboutComponent } from "../about/about.component";
import { ToolsComponent } from "../tools/tools.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [WelcomeComponent, ProjectsComponent, AboutComponent, ToolsComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
