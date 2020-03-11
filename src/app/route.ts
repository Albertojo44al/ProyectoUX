import { Routes } from "@angular/router";
import {PaginaPrincipalComponent} from "./pagina/pagina-principal.component";


export const AppRoutes: Routes = [
    { path: 'principal', component: PaginaPrincipalComponent },
    { path: '',  redirectTo: '/principal', pathMatch: 'full'}
]