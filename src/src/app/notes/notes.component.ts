import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  Semestre1 = [
  { Name : 'Informatique'
   ,Notes :
    [ {note:'13/20',coef:2},
      {note:'7/20',coef:5},
      {note:'19/20',coef:1},
      {note:'10/20',coef:3}]
   ,Moyenne : '11'
  },{
    Name : 'Anglais',
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
    }
  ]

  Semestre2 = [
  {
    Name : 'Informatique',
    Notes : [
      {note:'13/20',coef:2},
      {note:'7/20',coef:5},
      {note:'19/20',coef:1},
      {note:'10/20',coef:3}
    ],
    Moyenne : '11'
  },{
    Name : 'Anglais',
    Notes : [
      {note:'13/20',coef:3},
      {note:'7/20',coef:4},
      {note:'19/20',coef:1},
      {note:'13/20',coef:5}
    ],
    Moyenne : '17'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
