import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgramDescriptionComponent } from './components/program-description/program-description.component';
import { OportunitiesComponent } from './components/oportunities/oportunities.component';
import { GraduationComponent } from './components/graduation/graduation.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RegulamenteComponent } from './components/regulamente/regulamente.component';
import { DateContactComponent } from './components/date-contact/date-contact.component';
import { OrarComponent } from './components/orar/orar.component'
import { BurseComponent } from './components/burse/burse.component';



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
  {
    path:'regulamente',
    component: RegulamenteComponent
  },
  {
    path:'contact',
    component: DateContactComponent
  },
  {
    path:'orar',
    component: OrarComponent
  }, 
  {
    path:'burse',
    component: BurseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
