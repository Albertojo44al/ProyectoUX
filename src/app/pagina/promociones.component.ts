import { Component } from "@angular/core";
import { superOfertasService } from './super-orfertas.service';

@Component({
    template:`<br><br>
    <div class="container">
            <div class="row" >
                <div class="col-md-6" *ngFor="let p of Promociones">
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

export class promocionesComponent{
    Promociones:any[]
    promocion:any

    constructor(productoD: superOfertasService ){
        this.promocion = productoD;
    }

    ngOnInit(){
        this.promocion.getProducto().subscribe(data => {this.Promociones = data});
    }
}