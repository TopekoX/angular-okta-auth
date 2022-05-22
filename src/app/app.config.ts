export default {
    oidc: {
        clientId: '0oa54mt6oiarUL2LT5d7',
        issuer: 'https://YOUR_OKTA_DOMAIN/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scoper: ['openid', 'profile', 'email']
    }
}