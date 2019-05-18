import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Sub {
  IdUE: number;
  NameSubject: string;
  CoefSubject: number;
  Section: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  public addSubject(sub: Sub): Observable<any> {
    console.log('On lance la requete !');
    console.log(sub)
    return this.http.post('/api/subject/add', sub);
  }

}
