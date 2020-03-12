import { Injectable } from "@angular/core";
import {Subject} from 'rxjs'

@Injectable()
export class superOfertasService
{
    getProducto(){
        let subject = new Subject()
        setTimeout(()=> {
            subject.next(ofertas);
            subject.complete();
        }, 500);
            return subject;
        }
}

const ofertas=[{
    id: 1,
    img: "o1",
    name: "oferta1",},
{
    id: 2,
    img: "o4",
    name: "oferta2",},
{    
    id: 3,
    img: "o3",
    name: "oferta3",}
]