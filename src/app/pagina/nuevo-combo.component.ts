import { Component, OnInit } from "@angular/core";
import { ComboModel } from '../models/combo.model';
import { NgForm } from '@angular/forms';
import { CombosService } from '../services/combos.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
    templateUrl: 'nuevo-combo.component.html',
    styles: [`
        .col-4{ background-color: rgb(226, 205, 146); border: 20px;}
        label{color: #5A0505;}
        em {float:right; color:#FE0505; padding-left: 10px;}
        .error input, .error select, .error textarea { border-color:#EC0F0F; background-color:#E3C3C5;}
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color:#999; }
        .error :ms-input-placeholder { color: #999; }
        `]
})

export class nuevComboComponent implements OnInit{
    
combo: ComboModel;

constructor(private combos: CombosService, private router: Router){}

ngOnInit(){
    this.combo = new ComboModel();
}

fnSubmit(form: NgForm){
    if(form.invalid){return;}

    Swal.fire({
        allowOutsideClick: false, 
        icon: 'info',
        text: 'Espere por favor...',
    });
    Swal.showLoading();

    this.combos.crearCombo(this.combo)
    .subscribe( resp => {
        Swal.close();
        this.router.navigate(['/promociones']);
    },(err) =>{
        Swal.fire({
            icon: 'error',
            title: 'Error al autenticar',
            text: err.error.error.message,
          });
        });
    
}


}