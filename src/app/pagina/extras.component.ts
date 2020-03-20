import { Component } from "@angular/core";
import { superOfertasService } from './super-orfertas.service';

@Component({
    template:`<br><br>
    <div class="container">
        <div class="row justify-content-around">
            <div *ngFor="let e of Extras" class="col-4">
                <div class="well hoverwell thumbnail">
                    <a href="#">
                        <div><img src="/assets/superOfertas/{{e?.img}}.jpg" width="100%" height="250px"></div><br>
                        <button class="btn"> {{e?.name}}</button>
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