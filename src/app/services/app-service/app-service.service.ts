import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Semestru } from 'src/app/shared/data-types/Semestru';
import { InfoAbsolvireDisertatie } from 'src/app/shared/data-types/InfoAbsolvireDisertatie';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  public getSemestre(): Observable<Semestru[]> {
    const url ='http://localhost:8080/descriereaProgramului/listaDiscipline';
    return this.http.get<Semestru[]>(url);
  }

  public getInfoAbsolvireDizertatie(): Observable<InfoAbsolvireDisertatie> {
    const url ='http://localhost:8080/descriereaProgramului/infoAbsolvireDisertatie';
    return this.http.get<InfoAbsolvireDisertatie>(url);
  }

  public getOportunitatiProfestionale(): Observable<String[]> {
    const url ='http://localhost:8080/mediulMuncii/oportunitatiProfesionale';
    return this.http.get<String[]>(url);
  }

  
}
