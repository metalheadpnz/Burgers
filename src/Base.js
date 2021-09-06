import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyAnRFfx7pWmBt5GX2WYvgHy6T_khCN4s4s",
    // authDomain: "very-hot-burgers-818b2.firebaseapp.com",
    // databaseURL: "https://very-hot-burgers-818b2-default-rtdb.europe-west1.firebasedatabase.app"

    apiKey: "AIzaSyByLfxocvh5je0A-aVJhYuH39gWiLqoYNU",
    authDomain: "burgerock-2cc2f.firebaseapp.com",
    databaseURL: "https://burgerock-2cc2f-default-rtdb.europe-west1.firebasedatabase.app"

})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp}

export default base