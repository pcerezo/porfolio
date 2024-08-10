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
    { nombre: 'hibernate', icon: 'hibernate'},
    { nombre: 'Java', icon: 'java' },
    { nombre: 'Ruby', icon: 'ruby' },
    { nombre: 'C#', icon: 'CSharp'},
    { nombre: 'C', icon: 'C'},
    { nombre: 'C++', icon: 'c++'},
    { nombre: 'Bootstrap', icon: 'bootstrap' },
    { nombre: 'HTML', icon: 'html'},
    { nombre: 'css', icon: 'css'},
    { nombre: 'Javascript', icon: 'javascript'},
    { nombre: 'git', icon: 'git'},
    { nombre: 'github', icon: 'github'},
    { nombre: 'PHP', icon: 'php' },
    { nombre: 'NodeJS', icon: 'nodejs'},
    { nombre: 'Thymeleaf', icon: 'thymeleaf'},
    { nombre: 'Oracle SQL', icon: 'oracleSQL'},
    { nombre: 'Mongo DB', icon: 'mongoDB'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
