import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/shared/data-types/Disciplina';
import { AppServiceService } from 'src/app/services/app-service/app-service.service';
import { Router } from '@angular/router';
import { Semestru } from 'src/app/shared/data-types/Semestru';

@Component({
  selector: 'app-program-description',
  templateUrl: './program-description.component.html',
  styleUrls: ['./program-description.component.scss']
})
export class ProgramDescriptionComponent implements OnInit {

  discipline: any[] = [ 
    // { cod: "cod1", nume: 'nume1'},
    // { cod: "cod2", nume: 'nume2'},
    // { cod: "cod3", nume: 'nume3'}
]
  semestre: Semestru[] = [];

  constructor(
    private service: AppServiceService,
    public router: Router
    ) { }

  ngOnInit() {
    this.service.getSemestre().subscribe(
      data => {
        this.semestre = data;
        console.log(data);
        this.semestre.forEach( s => {
            // this.discipline.push(s.discipline)
            // console.log(s.);
            
            // s.discipline.forEach(e => {
            //   console.log(e.nume);
            // })
        })
        // console.log("nr sem", this.nrSem)
      },
      (err) => {
        console.warn('empty list');
      }
    );
    
  }

}
