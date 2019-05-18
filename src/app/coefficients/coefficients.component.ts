import { Component, OnInit } from '@angular/core';
import { MarksService } from '../marks.service';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { CoefficientService, NewCoef } from '../coefficient.service';

@Component({
  selector: 'app-coefficients',
  templateUrl: './coefficients.component.html',
  styleUrls: ['./coefficients.component.css']
})

export class CoefficientsComponent implements OnInit {

  subjects: any;

  newCoef: NewCoef = {
    Section: '',
    IdSubject: 0,
    Coef: 1
  };

  Coef: number = 1;

  constructor(private auth: AuthenticationService, private router: Router, private co: CoefficientService, private m: MarksService) { }

  getCoef(event: any) {
    for (let sub of this.subjects ) {
      if (sub.IdSubject == event) {
        this.Coef = sub.CoefSubject;
        this.newCoef.Coef = this.Coef; // pour ne pas le modifier si on appuie sans faire exprès
        this.newCoef.IdSubject = sub.IdSubject;
      }
    }
  }

  setCoef(event: number) {
    alert('Coefficient changed from ' + this.newCoef.Coef + ' to ' + event)
    this.newCoef.Coef = event;
  }

  getSubjects() {
    console.log('Section:  ' + this.newCoef.Section);
    this.m.getSubjects(this.newCoef.Section).subscribe(data => {
      this.subjects = data;
      console.log('Voici les subjects disponibles:')
      console.log(this.subjects);
    });
  }

  putNewCoef() {
    console.log('Chargement de la mise à jour du coefficient...');
    this.co.putCoefSubject(this.newCoef).subscribe(
      () => {
        this.router.navigateByUrl('/accueil');
      }
    );
  }

  ngOnInit() {
    console.log('Initialisation of CoefficientsComponent... ');
    this.auth.profile().subscribe(
      user => {
        this.newCoef.Section = user.Section;
        this.getSubjects();
      },
      err => {
        console.error(err);
      });
  }

}
