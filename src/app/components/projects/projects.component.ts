import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects = [
    { title: 'Web de medición de la contaminación lumínica', 
      body: 'Trabajo de fin de grado presentado en la universidad de Granada donde se mide la contaminación lumínica',
      portada: 'contaminacion_luminica/portada'
    },
    { title: 'Chacobache', 
      body: 'Promoción de un conjunto musical dedicado a la producción e interpretación musical muy variada especializada en el área de cine, anime, series y videojuegos',
      portada: 'chacobache/portada'
    },
   /* { title: 'Title 3', body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title 4', body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title 5', body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title 6', body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' }*/
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
