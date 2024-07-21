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
    'UI design',
    'UX design',
    'Wireframing',
    'Diagramming',
    'Brainstorming',
    'Online whiteboard',
    'Team collaboration'
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
