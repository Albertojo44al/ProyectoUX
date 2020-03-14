import { Routes } from "@angular/router";
import {PaginaPrincipalComponent} from "./pagina/pagina-principal.component";
import {crearUsuarioComponent} from "./usuario/log-in.component";


export const AppRoutes: Routes = [
    { path: 'crunchyRoll', component: PaginaPrincipalComponent },
    { path: '',  redirectTo: '/crunchyRoll', pathMatch: 'full'},
    { path: 'crunchyRoll/Perfil', component:crearUsuarioComponent}
]