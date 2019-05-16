import { Component, OnInit } from '@angular/core';
import { MarksService, UserData } from '../marks.service';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  details: UserDetails;

  getData: UserData = {
    EmailUser: '',
    Section: ''
  }

  orderedMarks: [];

  constructor(private auth: AuthenticationService, private router: Router, private m: MarksService) { }

  getOrderedMarks() {
    console.log('On essai de récupérer les marks ordonnées');
    this.getData.EmailUser = this.details.EmailUser;
    this.getData.Section = this.details.Section;
    this.m.marksBySubject(this.getData).subscribe(result => {
      this.orderedMarks = result;
      console.log(this.orderedMarks)
      }
    )
  }

  ngOnInit() {
    console.log('Initialisation MarksComponent');
    this.auth.profile().subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.error(err);
      }
  }

}
