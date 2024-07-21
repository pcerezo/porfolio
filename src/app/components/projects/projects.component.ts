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
    { title: 'Title 1', body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title 2', body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title 3', body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title 4', body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title 5', body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title 6', body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
