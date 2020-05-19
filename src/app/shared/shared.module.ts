import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatButtonModule, MatCommonModule, MatDividerModule, MatListModule, MatNavList, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatDividerModule,
    MatListModule,
    MatMenuModule
  ],
  exports:[
    ToastrModule, HeaderComponent, FooterComponent
  ],
  providers:[]
})
export class SharedModule { }
 