import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ComboModel } from '../models/combo.model';
import {map} from 'rxjs/operators';



@Injectable()

export class CombosService{

    private url = 'https://crunchy-pizza.firebaseio.com';

    constructor(private http: HttpClient){}

    crearCombo(combo: ComboModel){
        return this.http.post(`${this.url}/combos.json`, combo)
        .pipe(
            map((resp: any) => {
                combo.codigo = resp.name;
                return combo;
            })
        );
    }

    getCombos(){
        return this.http.get(`${this.url}/combos.json`)
        .pipe(
            map( this.crearArreglo )
        );
    }

    private crearArreglo( comboObj: object){
    const combos: ComboModel[] = [];
    console.log(comboObj);
    if(comboObj==null){return [];}
    Object.keys(comboObj).forEach( key =>{
    const combo: ComboModel = comboObj[key];
    combo.codigo = key;

        combos.push(combo);
    });

       return combos;
        
    }

    getComboByID( id: string){
        return this.http.get(`${this.url}/combos/${id}.json`);
    }

    borrarCombo( id:string){
        return this.http.delete(`${this.url}/combos/${id}.json`);
    }
}