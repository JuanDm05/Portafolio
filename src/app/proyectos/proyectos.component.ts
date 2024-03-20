import { Component, OnInit } from '@angular/core';
import { Portafolio } from '../models/portafolio';
import { PortafolioService } from '../portafolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {

  portafoli: Portafolio[]=[];

  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.getPortafolio().subscribe((result: Portafolio[]) => {
      console.log(result); // Verifica si los datos se están recibiendo correctamente
      this.portafoli = result;
    });
  }
}