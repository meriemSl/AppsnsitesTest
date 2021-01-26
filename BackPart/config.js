'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();


//assert(PORT, 'PORT is required');
//assert(HOST, 'HOST is required');

//module.exports = {
   
//    firebaseConfig: {
//        apiKey: "AIzaSyAcrQF8uAUbuiu4XZQ_yFpbLH34h7EfQ9M",
//        authDomain: "appsnsitestest.firebaseapp.com",
//        databaseURL: "https://appsnsitestest-default-rtdb.firebaseio.com",
//        projectId: "appsnsitestest",
//        storageBucket: "appsnsitestest.appspot.com",
//        messagingSenderId:  "69825936763",
//        appId: "1:69825936763:web:f6f458ab53d293561a11de"
//    } 
//}

module.exports = {
    port: 8080,
    host: "localhost",
    url: "http://localhost:8080" ,
    AUTH0_DOMAIN: 'appsnsitestest.firebaseapp.com', // e.g., you.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8080/', // e.g., http://localhost:1337/
    //FIREBASE_KEY: './firebase/index.js', // e.g., your-project-firebase-adminsdk-xxxxx-xxxxxxxxxx.json
    FIREBASE_DB: 'https://appsnsitestest-default-rtdb.firebaseio.com'  , 
    firebaseConfig: {
        apiKey: "AIzaSyAcrQF8uAUbuiu4XZQ_yFpbLH34h7EfQ9M",
        authDomain: "appsnsitestest.firebaseapp.com",
        databaseURL: "https://appsnsitestest-default-rtdb.firebaseio.com",
        projectId: "appsnsitestest",
        storageBucket: "appsnsitestest.appspot.com",
        messagingSenderId:  "69825936763",
        appId: "1:69825936763:web:f6f458ab53d293561a11de"
    } 
};
  