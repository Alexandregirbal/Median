import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate() {
    if (!(this.auth.isAdmin())) {
      alert('Accès refusé.\nVous n\'êtes pas administrateur de votre section. ')
      console.log('/!\\ Permission denied to simple user /!\\ ')
      this.router.navigateByUrl('/accueil')
      return false
    }
    console.log('Acces granted to the administrator')
    return true
  }

}
