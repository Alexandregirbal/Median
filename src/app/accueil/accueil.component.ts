import { Component, OnInit } from '@angular/core';
import { MarksService } from '../marks.service';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  details: UserDetails;

  orderedMarks1: any[] = [];
  orderedMarks2: any[] = [];

  // we can't have more than 6 UEs per smester (update possible: create an interface in an array...)
  averagesS1: number[][] = [[0],[0],[0],[0],[0],[0]];
  averagesS2: number[][] = [[0],[0],[0],[0],[0],[0]];

  avg1: number[] = [0,0,0,0,0,0];
  avg2: number[] = [0,0,0,0,0,0];

  constructor(private auth: AuthenticationService, private router: Router, private m: MarksService) { }

  // get marks and generate averages of 1st semester
  getOrderedMarks1() {
    this.m.marksOrder1().subscribe(result => {
      this.orderedMarks1 = result;
      console.log('\nData of the 1st semester--> ')
      console.log( this.orderedMarks1 );
      var avgSub: number;
      var avgSubject: number;
      var sumScales: number;
      var coefSub: number;
      var sumCoefSub: number;
      var sumSub: number;
      for (let i in this.orderedMarks1) {
        avgSubject = 0;
        sumCoefSub = 0;
        sumSub = 0;
        for ( let j in this.orderedMarks1[i].Subjects) { // calculs the average for each Subject
          avgSub = 0;
          sumScales = 0;
          coefSub = this.orderedMarks1[i].Subjects[j].CoefSubject //for the UE
          for (let mark of this.orderedMarks1[i].Subjects[j].Marks) {
            // console.log('Mark: ' + mark.MarkM + '/' + mark.ScaleM + ' coef ' + mark.CoefM);
            avgSub = avgSub + (mark.MarkM * mark.CoefM / mark.ScaleM);
            sumScales = sumScales + mark.CoefM
          }
          avgSubject = avgSub * 20 / sumScales;
          console.log('Average of ' + this.orderedMarks1[i].Subjects[j].NameSubject + ': ' + avgSubject + '\n');
          this.averagesS1[i][j] = (avgSubject.toFixed(2));
          sumCoefSub += coefSub;
          sumSub += coefSub * avgSubject
        }
        if (sumCoefSub != 0) {
          var avgUE = sumSub / sumCoefSub;
          console.log('avgUE: ' + avgUE);
          this.avg1[i] = +avgUE.toFixed(2);
        }
      }
      console.log('Averages of 1st semester:')
      console.log(this.averagesS1);
    })
    return true;
  }

  // get marks and generate averages of 2st semester
  getOrderedMarks2() {
    this.m.marksOrder2().subscribe(result => {
      this.orderedMarks2 = result;
      console.log('\nData of the 2st semester--> ')
      console.log( this.orderedMarks2 );
      var avgSub: number;
      var avgSubject: number;
      var sumScales: number;
      var coefSub: number;
      var sumCoefSub: number;
      var sumSub: number;
      for (let i in this.orderedMarks2) {
        avgSubject = 0;
        sumCoefSub = 0;
        sumSub = 0;
        for ( let j in this.orderedMarks2[i].Subjects) { // calculs the average for each Subject
          avgSub = 0;
          sumScales = 0;
          coefSub = this.orderedMarks2[i].Subjects[j].CoefSubject //for the UE
          for (let mark of this.orderedMarks2[i].Subjects[j].Marks) {
            // console.log('Mark: ' + mark.MarkM + '/' + mark.ScaleM + ' coef ' + mark.CoefM);
            avgSub = avgSub + (mark.MarkM * mark.CoefM / mark.ScaleM);
            sumScales = sumScales + mark.CoefM
          }
          avgSubject = avgSub * 20 / sumScales;
          console.log('Average of ' + this.orderedMarks2[i].Subjects[j].NameSubject + ': ' + avgSubject + '\n');
          this.averagesS2[i][j] = (avgSubject.toFixed(2));
          sumCoefSub += coefSub;
          sumSub += coefSub * avgSubject
        }
        if (sumCoefSub != 0) {
          var avgUE = sumSub / sumCoefSub;
          console.log('avgUE: ' + avgUE);
          this.avg2[i] = +avgUE.toFixed(2);
        }
      }
      console.log('Averages of 2st semester:')
      console.log(this.averagesS2);
    })
    return true;
  }

    /*getGlobalAverageS1() {
      var sumAvgG: number;
      var coef: number = 0;
      const avgsUE: [] = this.getUEAverageS1();
      for (let avg of avgsUE) {
        sumAvgG = sumAvgG + avg;
        coef = coef + 1; //puisque chaque UE vaut 1 de coef
      }
      if ( coef != 0 ){
        return sumAvgG / coef;
      } else {
        return 0;
      }
    }*/

  ngOnInit() {

    this.auth.profile().subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.error(err);
      });
    this.getOrderedMarks1();
    this.getOrderedMarks2();

  }

}
