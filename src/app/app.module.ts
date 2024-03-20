import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { MenuComponent } from './menu/menu.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PasswordModule } from 'primeng/password';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ApiComponent } from './api/api.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PresentacionComponent,
    MenuComponent,
    ProyectosComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SelectButtonModule,
    PasswordModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
