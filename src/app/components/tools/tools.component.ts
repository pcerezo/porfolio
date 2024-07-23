import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent implements OnInit{
  tools = [
    { nombre: 'Angular', icon: 'angular' },
    { nombre: 'Spring Boot', icon: 'springboot' },
    { nombre: 'PHP', icon: 'php' },
    { nombre: 'Java', icon: 'java' },
    { nombre: 'Ruby', icon: 'ruby' },
    { nombre: 'Bootstrap', icon: 'bootstrap' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
