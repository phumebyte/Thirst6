import { Routes } from '@angular/router';

//Landing (Home) Page
import { LandingPageComponent } from '../landing/landing-page/landing-page.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'home', component: LandingPageComponent},
    {path:'dashboard', component: DashboardComponent}

];
