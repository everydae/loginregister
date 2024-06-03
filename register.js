import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Txapjl_3nDMsO02FYwBGhva0_6DLzKk",
  authDomain: "login-database-4005c.firebaseapp.com",
  projectId: "login-database-4005c",
  storageBucket: "login-database-4005c.appspot.com",
  messagingSenderId: "622333644807",
  appId: "1:622333644807:web:58f7d505a4bb488eb4daa2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



//submit
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account...")
      window.location.href ="index.html"

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
