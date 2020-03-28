import { Component, OnInit } from "@angular/core";
import { CombosService } from '../services/combos.service';
import { ActivatedRoute } from '@angular/router';
import { ComboModel } from '../models/combo.model';
import { CarritoService } from '../services/carrito.service';



@Component({
    template: `
    <div class="container"> 
        <div class="row justify-content-center text-center">
            <div class="col-6"><br>
                <div class="well hoverwell thumbnail">
                    <h1 > {{combo.nombre}}</h1>
                    <img [src]="combo.imagenURL" width="90%" height="400px"><br><br>
                    <em><h4>{{combo.descripcion}}</h4></em>
                    <em><h3>Precio:  {{combo.precio}}</h3></em> 
                    <button (click)="fnAgregar(combo)" class="btn"> <i class="fa fa-plus"></i></button>
                </div>    
            </div>
        </div>
    </div>`
    
})

export class detalleComboComponent implements OnInit{
    combo: ComboModel = new ComboModel();
    constructor(private comboService: CombosService, private route: ActivatedRoute,private carrito: CarritoService){}
    
    ngOnInit(){
        const id = this.route.snapshot.paramMap.get('id');
        this.comboService.getComboByID( id )
        .subscribe( (resp:ComboModel) => {
            this.combo = resp;
            this.combo.codigo = id;
        });

    }
    
    fnAgregar(Combo: ComboModel){
        console.log(Combo);
        this.carrito.AgregarOrden(Combo);
    }

}