import { Routes } from "@angular/router";
import {PaginaPrincipalComponent} from "./pagina/pagina-principal.component";
import {loginComponent} from "./usuario/log-in.component";
import {crearUsuarioComponent} from "./usuario/crear-usuario.component";
import { pizzaComponent } from './pagina/pizzas.component';
import { extrasComponent } from './pagina/extras.component';
import { promocionesComponent } from './pagina/promociones.component';
import { AuthGuard } from './guards/auth.guard';


export const AppRoutes: Routes = [
    { path: 'crunchyRoll', component: PaginaPrincipalComponent },
    { path: '',  redirectTo: '/crunchyRoll', pathMatch: 'full'},
    { path: 'login', component:loginComponent},
    { path: 'SignUp', component:crearUsuarioComponent},
    {path: 'pizzas', component:pizzaComponent, canActivate: [AuthGuard]},
    {path: 'extras', component:extrasComponent, canActivate: [AuthGuard]},
    {path: 'promociones', component: promocionesComponent, canActivate: [AuthGuard]}
]