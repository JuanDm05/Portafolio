import { Component,OnInit  } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PasswordModule } from 'primeng/password';
import { FormControl, FormGroup } from '@angular/forms';
import { Portafolio } from '../models/portafolio';
import { PortafolioService } from '../portafolio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  portafoli: Portafolio[]=[];

  constructor(private portafolioService: PortafolioService) { }

 ngOnInit(): void {
    this.portafolioService.getPortafolio().subscribe((result: Portafolio[]) => (this.portafoli = result));
  }
}