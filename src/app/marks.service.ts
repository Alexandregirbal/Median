import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
    //console.log('Waiting for subjects....');
    return this.http.get('/api/getsubjects/' + id);
  }

  public marksOrder1(): Observable<any> {
    const token = localStorage.getItem('userToken');
    //console.log('Waiting for ordered marks of the 1st semester...')
    const base = this.http.get('/api/orderedMarks1', {
      headers: { Authorization: token }
    });
    return base;
  }

  public marksOrder2(): Observable<any> {
    const token = localStorage.getItem('userToken');
    //console.log('Waiting for ordered marks of the 2nd semester...')
    const base = this.http.get('/api/orderedMarks2', {
      headers: { Authorization: token }
    });
    return base;
  }
}
