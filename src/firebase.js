import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgAXDkyWeUJNqm2g2TSzdx5YDwSuUaJg8",
    authDomain: "chat-app-b73a9.firebaseapp.com",
    databaseURL: "https://chat-app-b73a9.firebaseio.com",
    projectId: "chat-app-b73a9",
    storageBucket: "chat-app-b73a9.appspot.com",
    messagingSenderId: "879714292694",
    appId: "1:879714292694:web:4e6fd0bde296a60b4c4a77",
    measurementId: "G-X0DLBLD9RM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;