import { Routes } from "@angular/router";
import {PaginaPrincipalComponent} from "./pagina/pagina-principal.component";
import {loginComponent} from "./usuario/log-in.component";
import {crearUsuarioComponent} from "./usuario/crear-usuario.component";


export const AppRoutes: Routes = [
    { path: 'crunchyRoll', component: PaginaPrincipalComponent },
    { path: '',  redirectTo: '/crunchyRoll', pathMatch: 'full'},
    { path: 'login', component:loginComponent},
    { path: 'SignUp', component:crearUsuarioComponent}
   
]