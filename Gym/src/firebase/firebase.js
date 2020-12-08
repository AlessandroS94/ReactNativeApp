import firebase from 'firebase';
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "",
    authDomain: "gym-project-c14a1.firebaseapp.com",
    databaseURL: "https://gym-project-c14a1.firebaseio.com",
    projectId: "gym-project-c14a1",
    storageBucket: "gym-project-c14a1.appspot.com",
    messagingSenderId: "590174090233",
    appId: "1:590174090233:web:28a6474fb6e378d26f8328",
    measurementId: "G-MJVQM6FRHG"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
