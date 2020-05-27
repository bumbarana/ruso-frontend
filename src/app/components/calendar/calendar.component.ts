import { Component, OnInit } from '@angular/core';
import { CalendarAdmitere } from 'src/app/shared/data-types/CalendarAdmitere';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service/app-service.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  informatiiAdmitere: CalendarAdmitere[] = [];

  constructor(private service: AppServiceService,
    public router: Router) { }

  ngOnInit() {
    this.service.getInfoAdmitere().subscribe(
      data => {
        this.informatiiAdmitere = data;
        console.log(data);
        this.informatiiAdmitere.forEach( s => {
        })

      },
      (err) => {
        console.warn('empty list');
      }
    );
  }

}
