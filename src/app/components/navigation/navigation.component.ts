import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth,
              public authStateService: OktaAuthStateService) {

    this.oktaAuth.authStateManager.subscribe(
      isAuth => this.isAuthenticated = isAuth
    );
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  async logout() {
    await this.oktaAuth.signOut();
  }

}
