import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Semestru } from 'src/app/shared/data-types/Semestru';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  public getSemestre(): Observable<Semestru[]> {
    const url ='http://localhost:8080/descriereaProgramului/listaDiscipline';
    return this.http.get<Semestru[]>(url);
  }

}
