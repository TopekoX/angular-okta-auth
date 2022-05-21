import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaSignIn from '@okta/okta-signin-widget';
import appConfig from 'src/app/app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  username: string = '';
  signIn: any;

  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth) {
    this.signIn = new OktaSignIn({
      baseUrl: appConfig.oidc.issuer.split('/oauth2')[0],
      clientId: appConfig.oidc.clientId,
      redirectUri: appConfig.oidc.redirectUri,
      logo: 'assets/images/angular-icon-logo.png',
      authParams: {
        pkce: true,
        issuer: appConfig.oidc.issuer,
        scopes: appConfig.oidc.scoper
      },
      i18n: {
        en: {
          'primaryauth.title': 'Sign in to Topekox',
        },
      }
    });
  }  

  ngOnInit(): void {
    this.signIn.remove();

    this.signIn.renderEl({
      el: '#okta-sign-in-widget'
    }, 
      (response: any) => {
        if (response.status === 'SUCCESS') {
          this.oktaAuth.signInWithRedirect();
        }  
      },
      (error: any) => {
        throw error;
      }
    );
  }

  ngOnDestroy(): void {
    this.signIn.remove();
  }

}
