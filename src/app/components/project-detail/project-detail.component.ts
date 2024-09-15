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
  projectDetail: ProjectDetail = {
    id: -1, title: '', 
    short_description: '', 
    description: '', 
    project_url: '', 
    repository_url: '', 
    status: '', 
    responsibilities: '', 
    start_date: '',
    end_date: '',
    client: '',
    role: '',
    Technologies: [],
    Categories: [],
    images: []};
  id: string = '';
  activeIndex = 0;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {
  }

  /*
  ngOnInit() {
    // Se obtiene el ID del proyecto que se está consultando
    this.route.paramMap.subscribe(params => {
      let varId = params.get('id')?.toString();

      if (varId != undefined) {
        this.id = varId;
      }
      console.log('ID:', this.id);
    });

    // Se obtienen los datos del proyecto a partir de su ID
    this.projectService.getProjectById(Number.parseInt(this.id)).subscribe(project => {
      if (project != undefined || project != null) {
        this.projectDetail = project;
      }
    });
  }
    */
  
  ngOnInit() {
    // Obtener el proyecto resuelto por el resolver
    this.route.data.subscribe(data => {
      this.projectDetail = data['project'];
    });
  }

  getImagenPortada(): any {
    return this.projectService.getImagenPortada(this.projectDetail);
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
