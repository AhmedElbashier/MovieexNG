import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
  
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

}

