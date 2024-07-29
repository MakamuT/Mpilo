import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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
const logIn = document.getElementById("logIn");
logIn.addEventListener("click", function (event) {
  event.preventDefault();

  // inputs
  const emailLink = document.getElementById("emailLink").value;
  const passwordLink = document.getElementById("passwordLink").value;

  signInWithEmailAndPassword(auth, emailLink, passwordLink)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Logging in...");
      window.location.href = "search.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
