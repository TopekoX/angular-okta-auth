export default {
    oidc: {
        clientId: 'YOUR CLIENT ID HERE',
        issuer: 'YOUR OCTA DOMAIN HERE',
        redirectUri: 'http://localhost:4200/login/callback',
        scoper: ['openid', 'profile', 'email']
    }
}