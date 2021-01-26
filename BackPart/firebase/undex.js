

var admin = require("firebase-admin");

var serviceAccount = require("./appsnsitestest-firebase-adminsdk-5ufv9-5f650cae69.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://appsnsitestest-default-rtdb.firebaseio.com"
});

module.exports = firebase;