import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'dashboardcard',
    component: DashboardCardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
