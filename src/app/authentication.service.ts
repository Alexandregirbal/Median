import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



export interface UserDetails {
  EmailUser: string;
  NameUser: string;
  SurnameUser: string;
  Section: string;
  Admin: boolean;
  exp: number; // date d'expiration
  iat: number;
}

interface TokenResponse { // permet de stock le token venant du backend
  token: string;
}

export interface TokenPayload { // permet de transporter le token a travers l'app
  EmailUser: string;
  NameUser: string;
  SurnameUser: string;
  Section: string;
  Admin: boolean;
  Password: string;
}


@Injectable()
export class AuthenticationService {

  private token: string; // on va chercher à récupérer le token généré par le serveur

  constructor(private http: HttpClient, private router: Router) {} // on utilise le constructor pour l'injection des dépendances

  private saveToken(token: string): void { // pour save le token on local
    localStorage.setItem('userToken', token); // on met l'element userToken de valeur token dans le localStorage
    this.token = token;
  }

  private getToken(): string { // vérifie si le token existe déjà
    if (!this.token) {
      this.token = localStorage.getItem('userToken');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {  // vérifie que le token existe
      payload = token.split('.')[1]; // .split divise le string à chaque '.' (supposons n '-') et met dans un tableau de n+1 strings
                                    // puis le [1] récup le second string du tableau
      // console.log('payload: ' + payload)
      payload = window.atob(payload); // window.atob decode un string en base64
      //console.log('token décodé (payload): ' + payload);

      return JSON.parse(payload); // JSON.parse transforme du json en objet js
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      const timeleft = user.exp - (Date.now() / 1000);
      console.log('Time left: ' + timeleft + ' sec');
      if (timeleft > 0) { // comme Date.now() renvoie des ms, on divise par 1000 pour convertir en secondes
        return true;
      }        // renvoie true si la date d'expiration est postérieur au moment actuel
    } else {
      console.log('Not logged');
      return false;
    }
  }

  public register(user: TokenPayload): Observable<any> { // TokenPayload est un type d'objet qui est passé au backend
    const base = this.http.post('/api/register', user); // 'http' vient du constructor HttpClient; /user/register est le chemin du
    // tslint:disable-next-line:max-line-length
                                                      // serveur qui attend un une requête POST http pour exécuter les instruction de registration
    const request = base.pipe(                        // le pipe fait en sorte d'attendre que la data soit disponible
      map((data: TokenResponse) => {
        if (data.token) { // si on a une reponse on save dans le localStorage
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

// LOGIN AND LOGOUT
  public login(user: TokenPayload): Observable<any> { // ici c'est la meme chose pour récuperer le token
    const base = this.http.post('/api/login', user);
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  public logout(): void { // sert à supprimer le token, en interne et en localStorage
    alert('Vous êtes déconnecté');
    this.token = '';
    window.localStorage.removeItem('userToken');
    this.router.navigateByUrl('/');
  }

// DATA of an USER
  public profile(): Observable<any> {
    const token = this.getToken();
    return this.http.get('api/profile', {
      headers: { Authorization: token } // on vérifie l'Authorization en envoyant le token en header de la requete puis on exploite les infos
    });
  }

}
