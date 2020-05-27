import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgramDescriptionComponent } from './components/program-description/program-description.component';
import { OportunitiesComponent } from './components/oportunities/oportunities.component';
import { GraduationComponent } from './components/graduation/graduation.component';
import { CalendarComponent } from './components/calendar/calendar.component';



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
    path:'infoAbsolvireDisertatie',
    component: GraduationComponent
  },
  {
    path:'infoAdmitere',
    component: CalendarComponent
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
