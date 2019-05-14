import { Component, OnInit } from '@angular/core';
import {NotesServiceService } from '../notes-service.service';// pour récupérer les infos du service

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  mesNotes = [] //on initialise notre objet

  constructor( private affichageMoyennes : NotesServiceService ) { }//on type affichageMoyennes avec NotesServiceService

  ngOnInit() { // donne l'accès à l'objet 'mesNotes'
    this.mesNotes=this.affichageMoyennes.getNotes() //comme on a importé, on peut appeler la fonction getNotes()
  }

}
