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
    img: "/assets/superOfertas/o1.png",
    name: "oferta1",},
{
    id: 2,
    img: "/assets/superOfertas/o2.jpg",
    name: "oferta2",},
{
    id: 3,
    img: "/assets/superOfertas/o3.jpg",
    name: "oferta3",},
{
    id: 4,
    img: "/assets/superOfertas/o4.jpg",
    name: "oferta4",}
]