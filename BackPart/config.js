'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: 8080,
    host: "localhost",
    url: "http://localhost:8080" ,
    firebaseConfig: {
        apiKey: "AIzaSyAcrQF8uAUbuiu4XZQ_yFpbLH34h7EfQ9M",
        authDomain: "appsnsitestest.firebaseapp.com",
        databaseURL: "https://appsnsitestest-default-rtdb.firebaseio.com",
        projectId: "appsnsitestest",
        storageBucket: "appsnsitestest.appspot.com",
        messagingSenderId:  "69825936763",
        appId: "1:69825936763:web:f6f458ab53d293561a11de"
    } 
}