import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgramDescriptionComponent } from './components/program-description/program-description.component';
import { OportunitiesComponent } from './components/oportunities/oportunities.component';
import { GraduationComponent } from './components/graduation/graduation.component';



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
    path:'listaDiscipline',
    component: ProgramDescriptionComponent
  },
  {
    path:'infoAbsolvireDizertatie',
    component: GraduationComponent
  },
  {
    path:'oportunitatiProfesionale',
    component: OportunitiesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
