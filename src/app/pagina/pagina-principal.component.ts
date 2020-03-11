import { Component } from "@angular/core";
import {superOfertasService} from "./super-orfertas.service"

@Component({
    templateUrl: './pagina-principal.component.html',
  
})

export class PaginaPrincipalComponent{
    Ofertas:any[]
    ofertas:any

    constructor(productoD: superOfertasService ){
        this.ofertas = productoD;
    }

    ngOnInit(){
        this.ofertas.getProducto().subscribe(data => {this.Ofertas = data});
    }

}