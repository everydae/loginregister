import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
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

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Loggin in");
      window.location.href =
        "https://gentlemonster.mobirisesite.com/?fbclid=IwZXh0bgNhZW0CMTAAAR09vXnHk-wWanVxJ9PYbHfUA-WWc_Xsi7i37txUNA3UDYq22dcT3FW5smc_aem_AalMYtT6_1h9s9DJ3WMDdCAIhZs2TCSW_4ahq66xnfZbTN4n7n_D1NBXSNIjs7wBBP4-drDEL3kFW9XL4zoGGxei";

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
