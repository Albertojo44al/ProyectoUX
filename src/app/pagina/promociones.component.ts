import { Component } from "@angular/core";
import { superOfertasService } from './super-orfertas.service';
import { CombosService } from '../services/combos.service';
import { ComboModel } from '../models/combo.model';
import Swal from 'sweetalert2';

@Component({
    template:`<br><br>
    <div class="container">
    <button [routerLink]="['/nuevoCombo']" class="btn btn-default float-right"> <img src="assets/mas.png" width="30px" height="30px"></button><br><br>

            <div class="row" >
                <div class="col-md-6" *ngFor="let c of combos; let i = index">
                    <div class="well hoverwell thumbnail">
                        <a [routerLink]="['detalle', c.codigo]">
                            <div><img [src]="c?.imagenURL" width="100%" height="250px"/></div><br>
                            <button  class="btn mr-1"> {{c?.nombre}}</button>
                        </a>
                        <button (click)="borrarCombo(c, i)" class="btn"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
            </div>
    </div>`

})

export class promocionesComponent{

    combos:ComboModel[]= [];

    constructor(private comboService: CombosService ){
        
    }

    ngOnInit(){
        this.comboService.getCombos()
        .subscribe(resp => this.combos = resp);
    }

    borrarCombo( combo: ComboModel, i:number){

        Swal.fire({
            title: '¿Esta seguro?',
            text: '¿Esta seguro de eliminar este elemento?',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(resp => {
             if(resp.value){
                this.combos.splice(i,1);
                this.comboService.borrarCombo( combo.codigo )
                .subscribe();
             }   
        });   
    }
}