import { Component,OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
    templateUrl: './log-in.component.html',
    styles: [`
    .col-4{ background-color: rgb(226, 205, 146); border: 20px;}
    label{color: #5A0505;}
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class crearUsuarioComponent implements OnInit{
    firstName:FormControl
    lastName:FormControl
    usuario:FormControl
    password:FormControl    
    usuarioForm: FormGroup

    constructor(){
        this.firstName = new FormControl('',  [Validators.required, Validators.pattern('[a-zA-Z]*')]);
        this.lastName = new FormControl('',  Validators.pattern('[a-zA-Z]*'));
        this.usuario = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);
    }

    ngOnInit()
  {
      this.usuarioForm = new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName,
          usuario: this.usuario,
          password: this.password
      });
  }
    NoValidUsuario(){
        return this.usuario.invalid && this.usuario.touched;
      }
    
      NoValidPassword(){
        return this.password.invalid && this.password.touched;
      }
    
}