import { Component } from '@angular/core';
import { ProjectDetail } from '../../models/projectDetail';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
  providers: [ProjectService]
})
export class ProjectDetailComponent {
  projectDetail: ProjectDetail | undefined = undefined;
  id: string = "";
  activeIndex = 0;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {
    // Se obtiene el ID del proyecto que se está consultando
    this.route.paramMap.subscribe(params => {
      let varId = params.get('id')?.toString();

      if (varId != undefined) {
        this.id = varId;
      }
      console.log('ID:', this.id);
    });

    // Se obtienen los datos del proyecto a partir de su ID
    projectService.getProjectById(Number.parseInt(this.id)).subscribe(project => {
      if (project != undefined || project != null) {
        this.projectDetail = project;
      }
    });
  }

  ngOnInit() {}

  getImagenPortada(): any {
    var images = this.projectDetail?.images;

    if (images != undefined) {
      for (let index = 0; index < images.length; index++) {
        const element = images[index];
        
        if (element.order == 1) {
          return element;
        }
      }
    }

    return undefined;
  }

  // Método para cambiar la diapositiva activa
  setActiveSlide(index: number): void {
    this.activeIndex = index;
  }

  // Método para pasar a la siguiente diapositiva
  nextSlide(): void {
    if (this.projectDetail?.images != undefined) {
      this.activeIndex = (this.activeIndex + 1) % this.projectDetail?.images.length;
    }
  }

  // Método para ir a la diapositiva anterior
  prevSlide(): void {
    if (this.projectDetail?.images != undefined) {
      this.activeIndex = (this.activeIndex - 1 + this.projectDetail?.images.length) % this.projectDetail?.images.length;
    }
  }
}
