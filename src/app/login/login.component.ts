import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    EmailUser: '',
    NameUser: '',
    SurnameUser: '',
    Section: '',
    Admin: false,
    Password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) { }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/accueil')
      },
      err => {
        console.error(err)
        alert('Mauvais Email ou Mot de passe.')
      }
    )
  }

  ngOnInit() {
  }

}
