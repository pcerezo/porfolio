import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from 'express';
import { ProjectDetail } from '../../models/projectDetail';
import { ProjectSummary } from '../../models/projectSummary';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: ProjectSummary[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  getImagenPortada(projectDetail: ProjectSummary) {
    return this.projectService.getImagenPortadaSummary(projectDetail);
  }

  
}
