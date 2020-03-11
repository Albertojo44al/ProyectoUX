import { Component } from '@angular/core'


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
   
} 