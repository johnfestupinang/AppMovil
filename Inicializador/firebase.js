import * as firebase from '../node_modules/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6fHxxFV2CFin4EkbJCxdRFpnf-Hn7GWQ",
    authDomain: "appmovil-c3789.firebaseapp.com",
    databaseURL: "https://appmovil-c3789.firebaseio.com",
    projectId: "appmovil-c3789",
    storageBucket: "appmovil-c3789.appspot.com",
    messagingSenderId: "722496758829",
    appId: "1:722496758829:web:8d23c538fb2e95a5"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;