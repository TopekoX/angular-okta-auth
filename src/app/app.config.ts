export default {
    oidc: {
        clientId: 'YOUR_CLIENT_ID',
        issuer: 'https://YOUR_OKTA_DOMAIN/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scoper: ['openid', 'profile', 'email']
    }
}