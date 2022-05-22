# Angular Okta Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Clone

Clone this project

```
git clone https://github.com/TopekoX/angular-okta-auth.git
```

## Install Dependency

Install Dependency

```
npm install
```

## Update Okta App Client Id and Okta Domain

Update file `src/app/app.config.ts`, change parameter in accordance your Octa App

```javascript
export default {
    oidc: {
        clientId: 'YOUR_CLIENT_ID',
        issuer: 'https://YOUR_OKTA_DOMAIN/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scoper: ['openid', 'profile', 'email']
    }
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Screenshoot

Login Page

![https://raw.githubusercontent.com/TopekoX/angular-okta-auth/main/screenshot/1.png](https://raw.githubusercontent.com/TopekoX/angular-okta-auth/main/screenshot/1.png)

Login Procces

![https://raw.githubusercontent.com/TopekoX/angular-okta-auth/main/screenshot/2.png](https://raw.githubusercontent.com/TopekoX/angular-okta-auth/main/screenshot/2.png)

Login Success

![https://raw.githubusercontent.com/TopekoX/angular-okta-auth/main/screenshot/3.png](https://raw.githubusercontent.com/TopekoX/angular-okta-auth/main/screenshot/3.png)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
