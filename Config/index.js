// Import the functions you need from the SDKs you need
import app from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJhwM9l-gXa44CZvPMoAc85GWqx3O4zGY",
  authDomain: "instanim-be912.firebaseapp.com",
  projectId: "instanim-be912",
  storageBucket: "instanim-be912.appspot.com",
  messagingSenderId: "618103809304",
  appId: "1:618103809304:web:cddfd0816df5b51ba06a6d"
};
// Initialize Firebase
const firebase=app.initializeApp(firebaseConfig);
export default firebase;