//     --ANGULAR MODULES--
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

//        -- SERVICES --
import { NotesServiceService } from './notes-service.service';
import { UserdataService } from './userdata.service';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { MarksService } from './marks.service';
import { CoefficientService } from './coefficient.service';
import { UeService } from './ue.service';
import { SubjectService } from './subject.service';


//       --COMPONENTS--
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CoefficientsComponent } from './coefficients/coefficients.component';
import { ModifierinfosComponent } from './modifierinfos/modifierinfos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotesComponent } from './notes/notes.component';
import { NotesAjoutComponent } from './notes-ajout/notes-ajout.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { RegisterComponent } from './register/register.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AddmarkComponent } from './addmark/addmark.component';
import { MarksComponent } from './marks/marks.component';
import { UeComponent } from './ue/ue.component';
import { SubjectComponent } from './subject/subject.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoefficientsComponent,
    ModifierinfosComponent,
    AccueilComponent,
    NotesComponent,
    NotesAjoutComponent,
    AdministrateurComponent,
    RegisterComponent,
    AnonymousComponent,
    LoginComponent,
    ProfileComponent,
    AddmarkComponent,
    MarksComponent,
    UeComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    NotesServiceService,
    UserdataService,
    AuthenticationService,
    AuthGuardService,
    MarksService,
    CoefficientService,
    UeService,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
