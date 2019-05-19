import { Component, OnInit } from '@angular/core';
import { MarksService } from '../marks.service';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { UeService } from '../ue.service';
import { SubjectService, Sub } from '../subject.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  ues: any;

  newSub: Sub = {
    IdUE: 0,
    NameSubject: '',
    CoefSubject: 1,
    Section: ''
  }

  constructor(private auth: AuthenticationService, private router: Router, private u: UeService, private sub: SubjectService) { }

  addSubject(){
    console.log('Ajout d\'un subject en cours');
    this.sub.addSubject(this.newSub).subscribe(
      () => {
        alert("Vous venez d'ajouter une matière dans votre filière.")
      }
    );
  }

  getId(event: any) {
    for (let ue of this.ues ) {
      if (ue.IdUE == event) {
        this.newSub.IdUE = event; // pour ne pas le modifier si on appuie sans faire exprès
      }
    }
  }

  ngOnInit() {
    console.log('Initialisation of SubjectComponent... ');
    this.auth.profile().subscribe(
      user => {
        console.log('Welcome ' + user.Section + ' administrator.')
        this.newSub.Section = user.Section
        this.u.getUEs(user.Section).subscribe(
          ue => {
            this.ues = ue;
          }
        )
      },
      err => {
        console.error(err);
      });
  }

}
