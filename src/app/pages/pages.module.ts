import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';

//module routes
import { PAGES_ROUTES } from './pages.routes';

//ng2 charts
import { ChartsModule } from 'ng2-charts';


import { PagesComponent } from "./pages.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from './progress/progress.component';
// tslint:disable-next-line:quotemark
import { IncrementatorComponent } from "../components/incrementator/incrementator.component";
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations : [        
        DashboardComponent,
        Graficas1Component,
        PagesComponent,
        ProgressComponent,  
        IncrementatorComponent, GraficoDonaComponent, AccountSettingsComponent      
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        
    ],
    imports : [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule{}