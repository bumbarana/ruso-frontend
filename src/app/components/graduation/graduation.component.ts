import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service/app-service.service';
import { InfoAbsolvireDisertatie } from 'src/app/shared/data-types/InfoAbsolvireDisertatie';
import { Act } from 'src/app/shared/data-types/Act';

@Component({
  selector: 'app-graduation',
  templateUrl: './graduation.component.html',
  styleUrls: ['./graduation.component.scss']
})
export class GraduationComponent implements OnInit {
  infoAbsolvireDizertatie: InfoAbsolvireDisertatie;
  acte: Act[] = [];

  constructor(private service: AppServiceService,
    public router: Router) { }

  ngOnInit() {
    this.service.getInfoAbsolvireDizertatie().subscribe(
      data => {
        this.infoAbsolvireDizertatie = data;
        console.log(data);
        this.acte = this.infoAbsolvireDizertatie.acteNecesare
        this.acte.forEach( a => {
           console.log(a); 
        })
      },
      (err) => {
        console.warn('empty list');
      }
    );
  }

}
