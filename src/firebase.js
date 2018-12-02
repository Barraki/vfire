import { initializeApp } from 'firebase';



const app = initializeApp ({
    apiKey: "AIzaSyArybHW9owMJLe7QjY_zELNYr8qScJK9cI",
    authDomain: "fir-vue-8d7d0.firebaseapp.com",
    databaseURL: "https://fir-vue-8d7d0.firebaseio.com",
    projectId: "fir-vue-8d7d0",
    storageBucket: "fir-vue-8d7d0.appspot.com",
    messagingSenderId: "83207653707"
  });


export const db = app.database();
export const namesRef = db.ref('names');
