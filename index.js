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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
