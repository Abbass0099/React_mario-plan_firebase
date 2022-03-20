import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details

/* var config = {
  apiKey: "AIzaSyDo2HauU6PtL3PY6KthXdpIUzbDV908avo",
  authDomain: "marioplan-files.firebaseapp.com",
  databaseURL: "https://marioplan-files.firebaseio.com",
  projectId: "marioplan-files",
  storageBucket: "marioplan-files.appspot.com",
  messagingSenderId: "1011174152626"
}; */



var config = {
  apiKey: "AIzaSyAYZxvkhEIsbQZNJVfhr4PaXjwLpVdLZEA",
  authDomain: "net-ninja-marioplan-c7959.firebaseapp.com",
  projectId: "net-ninja-marioplan-c7959",
  storageBucket: "net-ninja-marioplan-c7959.appspot.com",
  messagingSenderId: "233272256119",
  appId: "1:233272256119:web:15b8ab8353b49454770872",
  measurementId: "G-3DNWYTYKKH"
};



firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 