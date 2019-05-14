import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NewMark {
  MarkM: number;
  ScaleM: number;
  CoefM: number;
  IdSubject: number;
  EmailUser: string;
}

/*export interface Subject {
  IdSubject: number;
  NameSubject: string;
}*/

@Injectable()
export class MarksService {
  constructor(private http: HttpClient) { }

  public addmark(mark: NewMark): Observable<any> {
    return this.http.post('/api/addmark', mark);
  }

  getMarks(id): Observable<any> {
    return(this.http.get('/api/allmarks/' + id));
  }

  public getSubjects(id) {
    console.log('Waiting for subjects....');
    return this.http.get('/api/getsubjects/' + id);
  }
}
