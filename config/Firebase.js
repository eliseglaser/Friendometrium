import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAXuolmnLzbI3vuFBP2yUqZRtGaD9WsJjg",
    authDomain: "friendometrium-c6371.firebaseapp.com",
    databaseURL: "https://friendometrium-c6371.firebaseio.com",
    projectId: "friendometrium-c6371",
    storageBucket: "friendometrium-c6371.appspot.com",
    messagingSenderId: "34614304348",
    appId: "1:34614304348:web:2f994a42ba4be999ef5099",
    measurementId: "G-BE1TMRS1MD"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
