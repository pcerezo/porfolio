import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from '../../services/project.service';
import { ProjectDetail } from '../../models/projectDetail';

@Injectable({
  providedIn: 'root',
})
export class DatosResolver implements Resolve<any> {
    constructor(private projectService: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectDetail> {
    const projectId = route.paramMap.get('id');
    console.log('ID:', projectId?.toString());
    return this.projectService.getProjectById(projectId!.toString());
  }
}
