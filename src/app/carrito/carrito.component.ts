import { Component, OnInit } from "@angular/core";
import { ComboModel } from '../models/combo.model';
import { CarritoService } from '../services/carrito.service';


@Component({
    templateUrl: 'carrito.component.html'
})

export class CarritoComponent implements OnInit{
    combos: ComboModel;
constructor(private carrito: CarritoService){}
    
    
ngOnInit(){
    this.carrito.getOrdenes().subscribe( (data:ComboModel) => {this.combos = data});
}

   


}