import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = 'quYb9UhHg3vGAtvoWqysq7mim06EDx1FbwkMHiqHAEOMI4hc1RHVFocs'; // Reemplaza 'TU_API_KEY' con tu propia clave de API

  constructor() { }

  searchPhotos(query: string) {
    return axios.get(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization: this.apiKey
      }
    });
  }
}