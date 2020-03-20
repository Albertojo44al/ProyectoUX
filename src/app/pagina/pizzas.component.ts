import { Component } from "@angular/core";
import {superOfertasService} from "./super-orfertas.service"

@Component({
    template: `<br><br>
    <div class="container">
        <div class="row justify-content-around">
            <div *ngFor="let p of Pizzas" class="col-4">
                <div class="well hoverwell thumbnail">
                    <a href="#">
                        <div><img src="/assets/superOfertas/{{p?.img}}.jpg" width="100%" height="250px"></div><br>
                        <button class="btn"> {{p?.name}}</button>
                    </a>
                </div>
            </div>
        </div>
    </div>`

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