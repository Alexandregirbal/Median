import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http : HttpClient) {}

  getDatas(){ //il faut y mettre les données renvoyées par le serveur
    return[
      [
        "Alexandre","Girbal","IG","3"
      ],
      [
        "Jerem","Lefou","IG","12"
      ]
    ]
  }
}
