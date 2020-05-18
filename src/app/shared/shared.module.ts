import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports:[
    HeaderComponent, FooterComponent
  ],
})
export class SharedModule { }
