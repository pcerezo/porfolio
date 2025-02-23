import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  imageExists: boolean = false;
  imageUrl: string = '/assets/profile.png';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.checkImageExists(this.imageUrl);
  }

  checkImageExists(url: string): void {
    this.http.head(url, { observe: 'response' }).subscribe(
      response => {
        if (response.status === 200) {
          this.imageExists = true;
        }
      },
      error => {
        this.imageExists = false;
      }
    );
  }
}
