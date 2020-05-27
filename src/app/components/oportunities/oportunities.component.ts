import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service/app-service.service';

@Component({
  selector: 'app-oportunities',
  templateUrl: './oportunities.component.html',
  styleUrls: ['./oportunities.component.scss']
})
export class OportunitiesComponent implements OnInit {
  oportunitati: String[] = [];

  constructor(private service: AppServiceService,
    public router: Router) { }

  ngOnInit() {
    this.service.getOportunitatiProfestionale().subscribe(
      data => {
        this.oportunitati = data;
        console.log(data);
        this.oportunitati.forEach( s => {
           
        })
        // console.log("nr sem", this.nrSem)
      },
      (err) => {
        console.warn('empty list');
      }
    );
  }

}
