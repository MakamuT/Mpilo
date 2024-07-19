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

// SearchBar

// API integration
const API_KEY = "sk-proj-5UDmDED8RbyFxGwbX4CeT3BlbkFJWHsk6CWSjr3p0BHD7Brs";
const searchButton = document.querySelector("#search");

async function getMessage() {
  console.log("clicked");
  try {
  } catch {}
}

searchButton.addEventListener("click", getMessage);
