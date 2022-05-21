import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

import appConfig from './app.config';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent}, // , canActivate: [OktaAuthGuard]
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},
  {path: "", redirectTo: "/welcome", pathMatch: "full"}
]

const oktaAuth = new OktaAuth(appConfig.oidc);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    OktaAuthModule
  ],
  providers: [
    {
      provide: OKTA_CONFIG,
      useValue: { oktaAuth }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
