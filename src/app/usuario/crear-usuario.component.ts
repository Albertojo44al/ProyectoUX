import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
templateUrl: `./crear-usuario.component.html`,
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

export class crearUsuarioComponent{
    usuario:FormControl
    password:FormControl   
    nombre:FormControl
    apellido:FormControl 
    direccion:FormControl
    usuarioForm: FormGroup



    constructor(){
        this.nombre = new FormControl('',  [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
        this.apellido = new FormControl('',  Validators.pattern('[a-zA-Z ]*'));
        this.direccion = new FormControl('', Validators.required);
        this.usuario = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);
    }

    ngOnInit()
    {
        this.usuarioForm = new FormGroup({
            nombre: this.nombre,
            apellido: this.apellido,
            usuario: this.usuario,
            password: this.password,
            direccion: this.direccion
        });
    }
    NovalidNombre(){
        return this.nombre.invalid && this.nombre.touched;
    }

    NovalidApellido(){
        return this.apellido.invalid && this.apellido.touched;
    }

    NoValidUsuario(){
        return this.usuario.invalid && this.usuario.touched;
      }
    
    NoValidPassword(){
        return this.password.invalid && this.password.touched;
    }

    NovalidDireccion(){
        return this.direccion.invalid && this.direccion.touched;
    }
}