import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Portafolio } from './models/portafolio';
@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
    url = 'ProyectosControllers';

    constructor(private http: HttpClient) { }
    
    public getPortafolio(): Observable<Portafolio[]> {
      return this.http.get<Portafolio[]>(`${environment.apiUrl}/${this.url}`);}
  }
  