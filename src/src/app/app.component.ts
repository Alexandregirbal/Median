import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'app-root', //<app-route></app-route> est utilisé comme tag html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Median';
  constructor(public auth: AuthenticationService) {}
}
