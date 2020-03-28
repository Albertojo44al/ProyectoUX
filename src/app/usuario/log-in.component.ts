import { Component,OnInit } from "@angular/core";
import {  NgForm } from '@angular/forms'
import { UsuarioModel } from '../models/usuario.model';
import { AuthService } from '../services/auth.services';


@Component({
    templateUrl: './log-in.component.html',
    styles: [`
    .col-4{ background-color: rgb(226, 205, 146); border: 20px;}
    label{color: #5A0505;}
    em {float:right; color:#FE0505; padding-left: 10px;}
    .error input, .error select, .error textarea {border-color:#EC0F0F; background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class loginComponent implements OnInit{
    usuario: UsuarioModel;

    constructor(private auth: AuthService){
       
    }

    ngOnInit()
  {
    this.usuario = new UsuarioModel();
  }

    fnSubmit(form: NgForm){
      if(form.invalid){return;}
      this.auth.login(this.usuario)
      .subscribe(resp =>{
        console.log(resp)
      }, (err) => {
        console.log(err.error.error.message);
      });
    }

}