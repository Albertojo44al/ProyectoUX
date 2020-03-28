import { Routes } from "@angular/router";
import {PaginaPrincipalComponent} from "./pagina/pagina-principal.component";
import {loginComponent} from "./usuario/log-in.component";
import {crearUsuarioComponent} from "./usuario/crear-usuario.component";
import { pizzaComponent } from './pagina/pizzas.component';
import { extrasComponent } from './pagina/extras.component';
import { promocionesComponent } from './pagina/promociones.component';
import { AuthGuard } from './guards/auth.guard';
import { detalleComboComponent } from './pagina/detalle-combo.component';
import { nuevComboComponent } from './pagina/nuevo-combo.component';
import { CarritoComponent } from './carrito/carrito.component';


export const AppRoutes: Routes = [
    { path: 'crunchyRoll', component: PaginaPrincipalComponent },
    { path: '',  redirectTo: '/crunchyRoll', pathMatch: 'full'},
    { path: 'login', component:loginComponent},
    { path: 'SignUp', component:crearUsuarioComponent},
    {path: 'pizzas', component:pizzaComponent, canActivate: [AuthGuard]},
    {path: 'extras', component:extrasComponent, canActivate: [AuthGuard]},
    {path: 'promociones', component: promocionesComponent, canActivate: [AuthGuard]},
    {path: 'promociones/detalle/:id', component: detalleComboComponent},
    {path: 'nuevoCombo',component: nuevComboComponent},
    {path: 'carrito', component:CarritoComponent,canActivate: [AuthGuard]}
]