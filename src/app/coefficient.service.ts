import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface NewCoef {
  Section: string;
  IdSubject: number;
  Coef: number;
}

@Injectable({
  providedIn: 'root'
})
export class CoefficientService {
  constructor(private http: HttpClient) { }

  public putCoefSubject(coef: NewCoef): Observable<any> {
    return this.http.put('/api/subject/update',coef);
  }
}
