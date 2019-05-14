import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

import { CoefficientsComponent } from './coefficients/coefficients.component';
import { ModifierinfosComponent } from './modifierinfos/modifierinfos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotesComponent } from './notes/notes.component';
import { NotesAjoutComponent } from './notes-ajout/notes-ajout.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AddmarkComponent } from './addmark/addmark.component';


const routes: Routes = [ // 'Routes' est un type importé du module Router
  {path: '', component: AnonymousComponent},
  {path: 'accueil', component: AccueilComponent, canActivate: [AuthGuardService]},
  {path: 'coefficients', component: CoefficientsComponent, canActivate: [AuthGuardService]},
  {path: 'user/change', component: ModifierinfosComponent, canActivate: [AuthGuardService]},
  {path: 'notes', component: NotesComponent, canActivate: [AuthGuardService]},
  {path: 'addmark', component: AddmarkComponent, canActivate: [AuthGuardService]},
  {path: 'administrateur', component: AdministrateurComponent, canActivate: [AuthGuardService]},
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
