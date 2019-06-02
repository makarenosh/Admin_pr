import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard, AdminGuard } from "../services/service.index";
import { ProfileComponent } from "./profile/profile.component";
import { UsersComponent } from "./users/users.component";
import { HospitalsComponent } from "./hospitals/hospitals.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { DoctorComponent } from "./doctor.component";
import { SearchComponent } from "./search/search.component";

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
            { path : 'profile', component : ProfileComponent, data: { title:'Perfil de usuario'}},
            { path : 'search/:term', component : SearchComponent, data: { title:'Buscador'}},
            { path : 'settings', component : AccountSettingsComponent, data: { title:'Account settings'}},
            
            //MANTENIMIENTOS
            { canActivate: [AdminGuard], path : 'users', component : UsersComponent, data: { title:'Mantenimiento de usuarios'}},
            { path : 'hospitals', component : HospitalsComponent, data: { title:'Mantenimiento de Hospitales'}},
            { path : 'doctors', component : DoctorsComponent, data: { title:'Mantenimiento de Médicos'}},
            { path : 'doctor/:id', component : DoctorComponent, data: { title:'Detalles del Médico'}},
            { path : '', redirectTo : '/dashboard', pathMatch : 'full', data: { title:'Dashboard'}},  
        ]

    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);