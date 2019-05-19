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

export interface dSub {
  Section: string;
  IdSubject: number;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  public addSubject(sub: Sub): Observable<any> {
    console.log('On lance l\'addition du subject !');
    console.log(sub);
    return this.http.post('/api/subject/add', sub);
  }

  public deleteSubject(idSub: number): Observable<any> {
    const token = localStorage.getItem('userToken');
    console.log('On lance la SUPPRESSION du subject !');
    console.log(idSub);
    return this.http.delete('/api/subject/delete/' + idSub ,{
      headers: { Authorization: token }
    });
  }
}
