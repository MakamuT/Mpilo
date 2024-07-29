import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ8RRqmTJYB_clYp0VN8c4_02p29lwfZE",
  authDomain: "mpilo-app-52481.firebaseapp.com",
  projectId: "mpilo-app-52481",
  storageBucket: "mpilo-app-52481.appspot.com",
  messagingSenderId: "987304420031",
  appId: "1:987304420031:web:5bf32361ae8d4c36c8dc0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// submit button
const createAccount = document.getElementById("createAccount");
createAccount.addEventListener("click", function (event) {
  event.preventDefault();

  // inputs
  const fullName = document.getElementById("fullName").value;
  const emailLink = document.getElementById("emailLink").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const username = document.getElementById("username").value;
  const passwordLink = document.getElementById("passwordLink").value;

  createUserWithEmailAndPassword(auth, emailLink, passwordLink)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account...");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
