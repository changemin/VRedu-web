import { getMaxListeners } from "cluster";

var firebaseConfig = {
  apiKey: "AIzaSyBYwk-NOKMiehA7zlynQnCe_GTsuZhliSU",
  authDomain: "babyluna-ai-book.firebaseapp.com",
  databaseURL: "https://babyluna-ai-book.firebaseio.com",
  projectId: "babyluna-ai-book",
  storageBucket: "babyluna-ai-book.appspot.com",
  messagingSenderId: "764525002717",
  appId: "1:764525002717:web:ec2171fb535df938"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('firebase setting end')

function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}

writeUserData(bkm, byunkyunmin, bkm.change.min@getMaxListeners.com);