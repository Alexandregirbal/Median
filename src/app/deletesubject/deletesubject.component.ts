import { Component, OnInit } from '@angular/core';
import { SubjectService, dSub } from '../subject.service';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-deletesubject',
  templateUrl: './deletesubject.component.html',
  styleUrls: ['./deletesubject.component.css']
})
export class DeletesubjectComponent implements OnInit {

    subjects: any;

    dSubject: dSub = {
      Section: '',
      IdSubject: 0
    };

    constructor(private auth: AuthenticationService, private router: Router, private m: MarksService, private sub: SubjectService) { }

    setId(event: any) {
      for (let sub of this.subjects ) {
        if (sub.IdSubject == event) {
          this.dSubject.IdSubject = sub.IdSubject;
        }
      }
    }

    getSubjects() {
      //console.log('Section:  ' + this.dSubject.Section);
      this.m.getSubjects(this.dSubject.Section).subscribe(data => {
        this.subjects = data;
        //console.log('Voici les subjects disponibles:')
        //console.log(this.subjects);
        this.dSubject.IdSubject = this.subjects[0].IdSubject
      });
    }

    public confirmation() {
        if (confirm('ATTENTION !\nCette action effacera toutes les notes concernées.\nVoulez-vous continuer ?')) {
          alert('Vous venez de supprimer une matière.')
        } else {
          return false;
        }
      }

    deleteSubject() {
      console.log('Attention, suppression de la matière...');
      //console.log(this.dSubject.IdSubject)
      this.sub.deleteSubject(this.dSubject.IdSubject).subscribe(
        () => {
          this.router.navigateByUrl('/coefficients');
        }
      );
    }

    ngOnInit() {
      //console.log('Initialisation of CoefficientsComponent... ');
      this.auth.profile().subscribe(
        user => {
          this.dSubject.Section = user.Section;
          this.getSubjects();

        },
        err => {
          console.error(err);
        });
    }

  }
