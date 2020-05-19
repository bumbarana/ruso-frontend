import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ruso-frontend';
  route: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ){}

 ngOnInit(){
   this.route = this.router.url;
 }


}
