import { Component } from "@angular/core";
import {superOfertasService} from "./super-orfertas.service"

@Component({
    template: `<br><br>
    <div class="container">
    <button [routerLink]="['/nuevoCombo']" class="btn btn-default float-right"> <img src="assets/mas.png" width="30px" height="30px"></button><br><br>
        <div class="row justify-content-around">
            <div *ngFor="let p of Pizzas" class="col-4">
                <div class="well hoverwell thumbnail">
                    <a href="#">
                        <div><img src="/assets/superOfertas/{{p?.img}}.jpg" width="100%" height="250px"></div><br>
                        <button class="btn mr-1"> {{p?.name}}</button>
                        <button  class="btn"><i class="fa fa-trash"></i></button>
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