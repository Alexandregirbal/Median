import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Ue {
  NameUE: string;
  Section: string;
  SemesterUE: number;
}

@Injectable({
  providedIn: 'root'
})
export class UeService {

  constructor(private http: HttpClient, private router: Router) { }

  public getUEs(id: string): Observable<any> {
    console.log('try to get ues')
    return this.http.get('api/ue/get/' + id);
  }

  public addUE(ue: Ue): Observable<any> {
    return this.http.post('/api/ue/add', ue);
  }

  /*public deleteUE(ue: Ue): Observable<any> {
    return this.http.delete('/api/ue/delete', ue);
  }*/
}
