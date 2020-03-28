import { Component } from "@angular/core";
import { superOfertasService } from './super-orfertas.service';

@Component({
    template:`<br><br>
    <div class="container">
    <button [routerLink]="['/nuevoCombo']" class="btn btn-default float-right"> <img src="assets/mas.png" width="30px" height="30px"></button><br><br>
        <div class="row justify-content-around">
            <div *ngFor="let e of Extras" class="col-4">
                <div class="well hoverwell thumbnail">
                    <a href="#">
                        <div><img src="/assets/superOfertas/{{e?.img}}.jpg" width="100%" height="250px"></div><br>
                        <button class="btn mr-1"> {{e?.name}}</button>
                        <button  class="btn"><i class="fa fa-trash"></i></button>
                    </a>
                </div>
            </div>
        </div>
    </div>`

})

export class extrasComponent{
    Extras:any[]
    extra:any

    constructor(productoD: superOfertasService ){
        this.extra = productoD;
    }

    ngOnInit(){
        this.extra.getProducto().subscribe(data => {this.Extras = data});
    }
}