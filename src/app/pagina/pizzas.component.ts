import { Component } from "@angular/core";
import {superOfertasService} from "./super-orfertas.service"

@Component({
    templateUrl: './pizzas.component.html'

})

export class pizzaComponent{
    Pizzas:any[]
    pizzas:any

    constructor(productoD: superOfertasService ){
        this.pizzas = productoD;
    }

    ngOnInit(){
        this.pizzas.getProducto().subscribe(data => {this.Pizzas = data});
    }
}