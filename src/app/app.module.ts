import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatAutocompleteModule, MatIconModule, MatSelectModule, MatDividerModule, MatCardModule, MatExpansionModule, MatNavList, MatListModule, MatRadioButton, MatRadioModule, MatCheckbox, MatCheckboxModule, MatProgressBar, MatProgressBarModule, MatToolbarModule, MatTabsModule, MatGridListModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ProgramDescriptionComponent } from './components/program-description/program-description.component';
import { OportunitiesComponent } from './components/oportunities/oportunities.component';
import { GraduationComponent } from './components/graduation/graduation.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RegulamenteComponent } from './components/regulamente/regulamente.component';
import { DateContactComponent } from './components/date-contact/date-contact.component';
import { OrarComponent } from './components/orar/orar.component';
import { BurseComponent } from './components/burse/burse.component';
import { TaxeComponent } from './components/taxe/taxe.component';
import { CompetenteComponent } from './components/competente/competente.component';
import { InternshipComponent } from './components/internship/internship.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProgramDescriptionComponent,
    OportunitiesComponent,
    GraduationComponent,
    CalendarComponent,
    RegulamenteComponent,
    DateContactComponent,
    OrarComponent,
    BurseComponent,
    TaxeComponent,
    CompetenteComponent,
    InternshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatCarouselModule,
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule
  ],
  exports: [
    SharedModule,
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
