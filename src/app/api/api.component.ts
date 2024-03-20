import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  photos: any[] = [];

  constructor(private pexelsService: ApiService) {}

  searchPhotos(query: string) {
    this.pexelsService.searchPhotos(query).then(response => {
      this.photos = response.data.photos;
    }).catch(error => {
      console.error('Error fetching photos:', error);
    });
  }
}
