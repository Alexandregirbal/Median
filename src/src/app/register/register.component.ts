import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  credentials: TokenPayload = { //les credenteialssont liées par ngModel au html
    EmailUser: '',
    NameUser: '',
    SurnameUser: '',
    Section: '',
    Admin: false,
    Password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) { }

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        alert('Votre compte a bien été créé !')
        this.router.navigateByUrl('/accueil')
      },
      err => {
        console.error(err)
      }
    )
  }

  ngOnInit() {
  }

}
