import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor() {

  }

  getNotes(){ //il faut y mettre les données renvoyées par le serveur
    return [
      [
      {
        NomUE : "FONDAMENTAUX DE L'INFORMATIQUE",
        NomMatiere : 'Algorithmique',
        Notes : [
          {note:'13/20',coef:2},
          {note:'7/20',coef:5},
          {note:'19/20',coef:1},
          {note:'10/20',coef:3}
        ],
        Moyenne : '11'
      },{
        NomUE : "GESTION ET COMMUNICATION",
        NomMatiere : 'Anglais',
        Notes : [
          {note:'13/20',coef:3},
          {note:'7/20',coef:4},
          {note:'19/20',coef:1},
          {note:'13/20',coef:5},
          {note:'10/20',coef:2},
          {note:'7/20',coef:3},
          {note:'19/20',coef:4},
          {note:'10/20',coef:2}
        ],
        Moyenne : '14'
      },
      {
        NomUE : "FONDAMENTAUX DES MATHEMATIQUES",
        NomMatiere : 'Modélisation et statistique',
        Notes : [
          {note:'13/20',coef:2},
          {note:'7/20',coef:5},
          {note:'19/20',coef:1},
          {note:'10/20',coef:3}
        ],
        Moyenne : '11'
      }
    ], [
      {
        NomUE : "FONDAMENTAUX DE L'INFORMATIQUE",
        NomMatiere : 'Informatique',
        Notes : [
          {note:'13/20',coef:2},
          {note:'7/20',coef:5},
          {note:'19/20',coef:1},
          {note:'10/20',coef:3}
        ],
        Moyenne : '11'
      },{
        NomUE : "FONDAMENTAUX DE L'INFORMATIQUE",
        NomMatiere : 'Anglais',
        Notes : [
          {note:'13/20',coef:3},
          {note:'7/20',coef:4},
          {note:'19/20',coef:1},
          {note:'13/20',coef:5}
        ],
        Moyenne : '17'
        }
      ]
    ] //notes
  } //getNotes

}
