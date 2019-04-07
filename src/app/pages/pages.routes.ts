import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from "../services/service.index";

const pagesRoutes : Routes = [
    { 
        path : '', 
        component : PagesComponent,
        canActivate: [LoginGuardGuard],
        children : [
            { path : 'dashboard', component : DashboardComponent, data: { title:'Dashboard'}},            
            { path : 'progress', component : ProgressComponent, data: { title:'Progress'}},
            { path : 'graphs1', component : Graficas1Component, data: { title:'Graphs'}},
            { path : 'promesas', component : PromesasComponent, data: { title:'Promess'}},
            { path : 'rxjs', component : RxjsComponent, data: { title:'Observables'}},
            { path : 'settings', component : AccountSettingsComponent, data: { title:'Account settings'}},
            { path : '', redirectTo : '/dashboard', pathMatch : 'full', data: { title:'Dashboard'}},  
        ]

    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);