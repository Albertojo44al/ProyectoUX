import { Component,OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms'


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
    usuario:FormControl
    password:FormControl    
    usuarioForm: FormGroup

    constructor(){
        this.usuario = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);
    }

    ngOnInit()
  {
      this.usuarioForm = new FormGroup({
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