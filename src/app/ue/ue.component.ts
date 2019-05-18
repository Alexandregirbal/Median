import { Component, OnInit } from '@angular/core';
import { MarksService } from '../marks.service';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { UeService, Ue } from '../ue.service';

@Component({
  selector: 'app-ue',
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.css']
})
export class UeComponent implements OnInit {

    section: string;

    ues: any; // liste des UEs dispo
    ues1: object[] = [];
    ues2: object[] = [];

    newUE: Ue = {
      NameUE: '',
      Section: '',
      SemesterUE: 0
    };

    constructor(private auth: AuthenticationService, private router: Router, private u: UeService) { }

    splitUEs(ues) {
      for (let ue of ues) {
        if (ue.SemesterUE == 1) {
          this.ues1.push(ue);
        } else {
          this.ues2.push(ue);
        }
      }
    }

    addUE(){
      console.log('Chargement de la mise à jour du coefficient...');
      this.newUE.Section = this.section;
      this.u.addUE(this.newUE).subscribe(
        () => {
          alert("Vous venez d'ajouter un UE dans votre filière.\nSi dans le futur vous souhaitez le supprimer, il faudra préalablement effacer toutes les matières que celui-ci contiendra.")
          this.router.navigateByUrl('/subject/add'); // to reload the page
          alert('Remplissez ce nouvel UE des matières qui lui correspondent !')
        }
      );
    }

    ngOnInit() {
      console.log('Initialisation of CoefficientsComponent... ');
      this.auth.profile().subscribe(
        user => {
          this.section = user.Section;
          console.log('Welcome ' + this.section + ' administrator.')
          this.u.getUEs(this.section).subscribe(
            ue => {
              this.ues = ue;
              console.log('Les UEs suivants sont déjà dispo: ');
              console.log(this.ues);
              this.splitUEs(this.ues);
            }
          )
        },
        err => {
          console.error(err);
        });
    }

}
