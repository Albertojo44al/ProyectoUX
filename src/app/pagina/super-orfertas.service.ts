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
    name: "Pizza grande de queso y pepperoni"},
{
    id: 2,
    img: "o4",
    name: "Pizza grande, orden de palitroques"},
{    
    id: 3,
    img: "o3",
    name: "Pizza grande, cualquier especialidad"}
]