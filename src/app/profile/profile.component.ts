import { Component, OnInit } from '@angular/core';
import { MarksService } from '../marks.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  marks: [];

  constructor(private auth: AuthenticationService, private ma: MarksService ) { }

    getMarks() {
      this.auth.profile().subscribe(user => {
        //console.log(user.EmailUser);
        this.ma.getMarks(user.EmailUser).subscribe(data => {
          this.marks = data;
          //console.log(this.marks);
        });
      }
      );
    }



    ngOnInit() {
      this.getMarks()
    }

}
