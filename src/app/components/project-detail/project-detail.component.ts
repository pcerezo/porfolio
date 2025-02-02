import { Component } from '@angular/core';
import { ProjectDetail } from '../../models/projectDetail';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
  providers: [ProjectService]
})
export class ProjectDetailComponent {
  projectDetail: ProjectDetail = {
    _id: "-1", title: '', 
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
    technologies: [],
    Categories: [],
    images: []};
  id: string = '';
  activeIndex = 0;

  contenidoArray: string[] = [];

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    // Obtener el proyecto resuelto por el resolver
    this.route.data.subscribe(data => {
      this.projectDetail = data['project'];
    });

    this.contenidoParrafos();
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

  contenidoParrafos() {
    // Divide el contenido en párrafos usando un delimitador adecuado, como '\n\n' 
    this.contenidoArray = this.projectDetail.description.split('\n\n');
  }
}
