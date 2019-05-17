import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable()

export class AuthGuardService implements CanActivate { //CanActivate est une interface qui sert à valider si un user peut accéder à la page

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate() {
    if (!(this.auth.isLoggedIn())) { // si on est pas login on retourne à la racine
      this.router.navigateByUrl('/') // rappel: ceci est la page de connection/inscription
      alert('Connectez-vous pour accéder à cette page.')
      console.log('/!\\ Permission denied /!\\ ')
      return false
    }
    console.log('Acces granted')
    return true //sinon on renvoie true car login
  }

}
