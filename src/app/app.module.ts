import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import {PaginaPrincipalComponent} from "./pagina/pagina-principal.component";
import { AppRoutes } from "./route";
import {superOfertasService} from  "./pagina/super-orfertas.service";

//bootstrap


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  
  ],
  providers: [superOfertasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
