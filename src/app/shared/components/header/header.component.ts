import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToDiscipline(){
    this.router.navigate(["/listaDiscipline"]);
  }

  goToInfoAbsolvireDizertatie() {
    this.router.navigate(["/infoAbsolvireDisertatie"]);
  }

  goToCalendar(){
    this.router.navigate(["/infoAdmitere"]);
  }
 
  goToOportunitatiProfesionale(){
    this.router.navigate(["/oportunitatiProfesionale"]);
  }

  goToRegulamente() {
    this.router.navigate(["/regulamente"]);
  }
  goToDateContact() {
    this.router.navigate(["/contact"]);
  }

  goToOrar() {
    this.router.navigate(["/orar"]);
  }
}
