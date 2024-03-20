import { Component, OnInit } from '@angular/core';
import { Portafolio } from '../models/portafolio';
import { PortafolioService } from '../portafolio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  portafoli: Portafolio[]=[];

  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.getPortafolio().subscribe((result: Portafolio[]) => {
      console.log(result); // Verifica si los datos se están recibiendo correctamente
      this.portafoli = result;
    });
  }
}