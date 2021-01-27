
// src/environments/environment.ts
const FB_PROJECT_ID = 'appsnsitestest';

export const environment = {
  production: false,
  BACKEND: 'http://localhost:8080',
  LOGIN_ENDPOINT: 'api/login_check',
  User_ENDPOINT: 'api/user',
  Users_ENDPOINT : 'api/users',
  auth: {
    clientId: '2rpxkmGgvY376IVGIFyS4IoKBjD75HCA',
    clientDomain: 'dev-yzrc-p2u.us.auth0.com', // e.g., you.auth0.com
    audience: 'http://localhost:8080/', // e.g., http://localhost:1337/
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  },
  firebase: {
    apiKey: "AIzaSyAcrQF8uAUbuiu4XZQ_yFpbLH34h7EfQ9M",
    authDomain: "appsnsitestest.firebaseapp.com",
    databaseURL: "https://appsnsitestest-default-rtdb.firebaseio.com",
    projectId: "appsnsitestest",
    storageBucket: "appsnsitestest.appspot.com",
    messagingSenderId:  "69825936763",
    appId: "1:69825936763:web:f6f458ab53d293561a11de"
} ,
  apiRoot: 'http://localhost:8080/' // e.g., http://localhost:1337/ (DO include trailing slash)
};

