import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";
import { ToolsComponent } from "./components/tools/tools.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { provideHttpClient, withFetch } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProjectsComponent, AboutComponent, ToolsComponent, ContactComponent,
    FooterComponent, WelcomeComponent, WelcomeComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CerezoWeb';
}
