/***document.getElementById("allow-btn").addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        alert("Location access granted.");
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
      },
      function (error) {
        alert("Location access denied.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
  closePopup();
});

document.getElementById("deny-btn").addEventListener("click", function () {
  alert("Location access denied.");
  closePopup();
});

function closePopup() {
  document.getElementById("popup").style.visibility = "hidden";
  document.getElementById("popup").style.opacity = "0";
}  */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  createUserEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdYM08AxUTdm9fwipJFjvrfSHMNwgNOCQ",
  authDomain: "mpilo-429010.firebaseapp.com",
  databaseURL:
    "https://mpilo-429010-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mpilo-429010",
  storageBucket: "mpilo-429010.appspot.com",
  messagingSenderId: "132338768622",
  appId: "1:132338768622:web:833d4c9237674e59a131ff",
  measurementId: "G-VR7LQTQZJ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 5000);
}
const signUp = document.getElementById("submitSignUp");
signUp.addEventListener("click", (event) => {
  event.preventDefault();
  const fullName = document.getElementById("fname").value;
  const email = document.getElementById("sEmail").value;
  const phoneNumber = document.getElementById("pNumber").value;
  const username = document.getElementById("sUsername").value;
  const password = document.getElementById("sPassword").value;

  const auth = getAuth();
  const db = getFirestore();

  createUserEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        fullName: fullName,
      };
      showMessage("Account Created Successfully", "signUpMessage");
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error("error writing document", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == "auth/email-already-in-use") {
        showMessage("Email Address Already Exists !!!", "signUpMessage");
      } else {
        showMessage("unable to create User", "signUpMessage");
      }
    });
});
