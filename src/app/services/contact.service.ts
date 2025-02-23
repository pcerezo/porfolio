import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectSummary } from '../models/projectSummary';
import { ProjectDetail } from '../models/projectDetail';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
    
    constructor(private http: HttpClient) {}

    enviarCorreo(formulario: any): Observable<any> {
        return this.http.post<any[]>(`http://localhost:27017/api/enviarCorreo`, formulario);
    }
}