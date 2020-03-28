import { Injectable } from "@angular/core";
import { ComboModel } from '../models/combo.model';
import { Subject } from 'rxjs';


@Injectable()

export class CarritoService{
combos: ComboModel[] =[];


    AgregarOrden(combo: ComboModel){
        this.combos.push(combo); 
        console.log(this.combos);  
    }

    getOrdenes(){
        let subject = new Subject()
        setTimeout(()=> {
            subject.next(this.combos);
            subject.complete();
        }, 500);
        console.log(subject);
            return subject;
        }
}



