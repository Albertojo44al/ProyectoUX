import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes-services
import {superOfertasService} from  "./pagina/super-orfertas.service";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./route";

//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//components
import {PaginaPrincipalComponent} from "./pagina/pagina-principal.component";
import { AppComponent } from './app.component';
import { loginComponent } from "./usuario/log-in.component";
import { crearUsuarioComponent } from "./usuario/crear-usuario.component"
import { NavBarComponent } from './navbar/navbar.component';
import { pizzaComponent } from './pagina/pizzas.component';
import {extrasComponent} from './pagina/extras.component';
import { promocionesComponent } from './pagina/promociones.component';
//bootstrap


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaginaPrincipalComponent,
    loginComponent,
    crearUsuarioComponent,
    pizzaComponent,
    extrasComponent,
    promocionesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  
  ],
  providers: [superOfertasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
