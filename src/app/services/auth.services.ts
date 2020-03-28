
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';


@Injectable()

export class AuthService{

    private url = 'https://identitytoolkit.googleapis.com/v1';
    private apiKey = 'AIzaSyAnn6l2x7hH56psRhfeTOFIO6IhoTczmXs';
//crear usuario
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

//Login
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

    constructor( private http: HttpClient){}

    logout(){}

    login(usuario:UsuarioModel){
        const authData = {
            ...usuario,
             returnSecureToken: true
         };
 
         return this.http.post(
             `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`,authData);
    }
    nuevoUsuario(usuario: UsuarioModel){
        const authData = {
           ...usuario,
            returnSecureToken: true
        };

        return this.http.post(
            `${this.url}/accounts:signUp?key=${this.apiKey}`,authData);
    }
}