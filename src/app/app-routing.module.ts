import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { MenuComponent } from './menu/menu.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ApiComponent } from './api/api.component';
const routes: Routes = [
    { path: '', component: InicioComponent }, 
  { path: 'inicio', component: InicioComponent }, // Ruta principal que redirige al LoginComponent
  { path: 'proyectos', component: ProyectosComponent }, // Ruta principal que redirige al LoginComponent
  { path: 'presentacion', component: PresentacionComponent }, // Ruta principal que redirige al LoginComponent

  { path: 'api', component: ApiComponent }, // Ruta principal que redirige al LoginComponent

  // Ruta principal que redirige al LoginComponent
  { path: 'presentacion', component: InicioComponent }, // Ruta principal que redirige al LoginComponent
  { path: 'menu', component: MenuComponent }, // Ruta principal que redirige al LoginComponent

];      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
