import { Component, OnInit } from '@angular/core';
import { MarksService, NewMark } from '../marks.service';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';


@Component({
  selector: 'app-addmark',
  templateUrl: './addmark.component.html',
  styleUrls: ['./addmark.component.css']
})

export class AddmarkComponent implements OnInit {

  newmark: NewMark = {
    MarkM: 0,
    ScaleM: 20,
    CoefM: 1,
    IdSubject: 0,
    EmailUser: ''
  };

  subjects: any;

  details: UserDetails;

  constructor(private auth: AuthenticationService, private router: Router, private m: MarksService) { }

  addmark() {
    console.log('Ajout d\'une note [front]');
    console.log('user:  ' + this.details.EmailUser);
    this.newmark.EmailUser = this.details.EmailUser;
    this.newmark.IdSubject = +(this.newmark.IdSubject); // converts to number
    this.m.addmark(this.newmark).subscribe(
      () => {
        alert('Vous venez d\'enregistrer une note !');
        this.router.navigateByUrl('/notes');
      }
    );
  }

  getSubjects() {
    console.log('On veut les subjects dispo pour un user [front]');
    console.log('user:  ' + this.details.EmailUser);
    console.log('section:  ' + this.details.Section);
    console.log('Waiting for subjects....');
    this.m.getSubjects(this.details.Section).subscribe(data => {
      this.subjects = data;
      console.log(this.subjects);
    });
  }

  ngOnInit() {
    console.log('Initialisation AddmarkComponent');
    this.auth.profile().subscribe(
      user => {
        this.details = user;
        console.log('On cherche les subjects dispo pour les ' + this.details.Section);
        this.m.getSubjects(this.details.Section).subscribe(data => {
          this.subjects = data;
          console.log(this.subjects);
        });
      },
      err => {
        console.error(err);
      }
    );
  }
}
