//     --ANGULAR MODULES--
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

//        -- SERVICES --
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
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AddmarkComponent } from './addmark/addmark.component';
import { MarksComponent } from './marks/marks.component';
import { UeComponent } from './ue/ue.component';
import { SubjectComponent } from './subject/subject.component';
import { DeletesubjectComponent } from './deletesubject/deletesubject.component';
//import { ServiceWorkerModule } from '@angular/service-worker';
//import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoefficientsComponent,
    AccueilComponent,
    RegisterComponent,
    AnonymousComponent,
    LoginComponent,
    ProfileComponent,
    AddmarkComponent,
    MarksComponent,
    UeComponent,
    SubjectComponent,
    DeletesubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    HttpClientModule
    //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
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
