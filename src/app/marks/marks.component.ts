import { Component, OnInit } from '@angular/core';
import { MarksService } from '../marks.service';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  details: UserDetails;

  orderedMarks1: any[] = [];
  orderedMarks2: any[] = [];

  averagesS1: number[][] = [[]];
  averagesS2: number[][] = [[]];

  constructor(private auth: AuthenticationService, private router: Router, private m: MarksService) { }

  // get marks and generate averages of 1st semester
  getOrderedMarks1() {
    this.m.marksOrder1().subscribe(result => {
      this.orderedMarks1 = result;
      console.log('\nHere we have our 1st json object--> ')
      console.log( this.orderedMarks1 );
      var avgSub: number = 0;
      var avgSubject: number;
      var sumScales: number;
      var voidNested: [];
      for (let i in this.orderedMarks1) {
        avgSubject = 0;
        for ( let j in this.orderedMarks1[i].Subjects) { // calculs the average for each Subject
          avgSub = 0;
          sumScales = 0;
          for (let mark of this.orderedMarks1[i].Subjects[j].Marks) {
            console.log('Mark: ' + mark.MarkM + '/' + mark.ScaleM + ' coef ' + mark.CoefM);
            avgSub = avgSub + (mark.MarkM * mark.CoefM / mark.ScaleM);
            sumScales = sumScales + mark.CoefM
          }
          avgSubject = avgSub * 20 / sumScales;
          console.log('Average of ' + this.orderedMarks1[i].Subjects[j].NameSubject + ': ' + avgSubject);
          console.log( 'We wanna put our average in a variable at indexes:' + i + ',' + j )
          this.averagesS1[i][j] = (avgSubject.toFixed(2));
        }
      }
      console.log(this.averagesS1);
    })
    return true;
  }

  // get marks and generate averages of 2st semester
  getOrderedMarks2() {
    this.m.marksOrder2().subscribe(result => {
      this.orderedMarks2 = result;
      console.log('\nHere we have our 2st json object--> ')
      console.log( this.orderedMarks2 );
      var avgSub: number = 0;
      var avgSubject: number;
      var sumScales: number;
      var voidNested: [];
      for (let i in this.orderedMarks2) {
        avgSubject = 0;
        for ( let j in this.orderedMarks2[i].Subjects) { // calculs the average for each Subject
          avgSub = 0;
          sumScales = 0;
          for (let mark of this.orderedMarks2[i].Subjects[j].Marks) {
            console.log('Mark: ' + mark.MarkM + '/' + mark.ScaleM + ' coef ' + mark.CoefM);
            avgSub = avgSub + (mark.MarkM * mark.CoefM / mark.ScaleM);
            sumScales = sumScales + mark.CoefM
          }
          avgSubject = avgSub * 20 / sumScales;
          console.log('Average of ' + this.orderedMarks2[i].Subjects[j].NameSubject + ': ' + avgSubject);
          console.log( 'We wanna put our average in a variable at indexes:' + i + ',' + j )
          this.averagesS2[i][j] = (avgSubject.toFixed(2));
        }
      }
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

    this.getOrderedMarks1(); //.subscribe(() => this.generateAveragesS1() )
    this.getOrderedMarks2();
    // this.generateAveragesS1();
    // this.generateAveragesS2();
    console.log('Initialisation MarksComponent done');
  }

}
