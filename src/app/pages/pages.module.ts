import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

//module routes
import { PAGES_ROUTES } from './pages.routes';


import { PagesComponent } from "./pages.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


@NgModule({
    declarations : [        
        DashboardComponent,
        Graficas1Component,
        PagesComponent,        
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,        
    ],
    imports : [    
    SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule{}