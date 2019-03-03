import { Route } from "@angular/compiler/src/core";
import { Component } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Graficas1Component } from "./pages/graficas1/graficas1.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from "./pages/pages.component";
import { RegisterComponent } from "./login/register/register.component";

const appRoutes : Routes = [
    { 
        path : '', component : PagesComponent,
        children : [
            { path : 'dashboard', component : DashboardComponent },            
            // { path : 'progress', Component : progressComponent }
            { path : 'graphs1', component : Graficas1Component },
            { path : '', redirectTo : '/dashboard', pathMatch : 'full' },  
        ]

    },
    
    { path : 'login', component : LoginComponent }, 
    { path : 'register', component : RegisterComponent },      
    { path : '**', component : NopagefoundComponent },
    
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash : true });