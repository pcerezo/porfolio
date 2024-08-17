import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ProjectSummary {
  id: number;
  title: string;
  short_description: string;
  start_date: string;
  end_date: string;
  client: string;
  role: string;
  Technologies: { name: string }[];
  Categories: { name: string }[];
  images: { image_url: string, alt_text: string, order: number }[];
}

interface ProjectDetail extends ProjectSummary {
  description: string;
  responsibilities: string;
  project_url: string;
  repository_url: string;
  status: string;
  images: { image_url: string, alt_text: string, order: number }[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<ProjectSummary[]> {
    return this.http.get<ProjectSummary[]>(`${this.apiUrl}/projects`);
  }

  getProjectById(id: number): Observable<ProjectDetail> {
    return this.http.get<ProjectDetail>(`${this.apiUrl}/projects/${id}`);
  }
}
