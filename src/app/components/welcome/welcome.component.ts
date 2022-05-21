import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isAuntheticated: boolean = false;
  username: string = "";

  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth) { }

  async ngOnInit() {
    this.isAuntheticated = await this.oktaAuth.isAuthenticated();

    if (this.isAuntheticated) {
      const userClaims = await this.oktaAuth.getUser();
      this.username = userClaims.name || "";
    }
  }

}
