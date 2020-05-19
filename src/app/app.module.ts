import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatAutocompleteModule, MatIconModule, MatSelectModule, MatDividerModule, MatCardModule, MatExpansionModule, MatNavList, MatListModule, MatRadioButton, MatRadioModule, MatCheckbox, MatCheckboxModule, MatProgressBar, MatProgressBarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,

    
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
    MatProgressBarModule
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
