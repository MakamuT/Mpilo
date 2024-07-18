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
