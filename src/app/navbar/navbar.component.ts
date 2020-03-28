import { Component } from '@angular/core'
import { AuthService } from '../services/auth.services';
import { Router } from '@angular/router';


@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles:[
        `.navbar-default {
            background-color: #5A0505;
            color: aliceblue;
        }`,
        `a {
            color: #f5f5f5;
            text-decoration: none;
            background-color: transparent;
        }
        
        button {
            color: #f5f5f5;
        }
        `]
})

export class NavBarComponent
{
   constructor(private auth: AuthService, private router: Router){}

   salir(){
       this.auth.logout();
       this.router.navigateByUrl('/login');
   }

   conectado():boolean{
       if(this.auth.estaAutenticado())
       return true;
       else
       return false;
   }
} 