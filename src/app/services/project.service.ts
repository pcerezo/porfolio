import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectSummary } from '../models/projectSummary';
import { ProjectDetail } from '../models/projectDetail';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<ProjectDetail[]> {
    return this.http.get<ProjectDetail[]>(`${this.apiUrl}/projects`);
  }

  getProjectById(id: number): Observable<ProjectDetail> {
    return this.http.get<ProjectDetail>(`${this.apiUrl}/projects/${id}`);
  }

  getImagenPortada(projectDetail: ProjectDetail): any {
    var images = projectDetail?.images;

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

  getImagenPortadaSummary(projectDetail: ProjectSummary): any {
    var images = projectDetail?.images;

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
}
