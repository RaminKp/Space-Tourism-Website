document.addEventListener("DOMContentLoaded", function () {
  let glowingCircle = document.querySelector(".buttonBackGlow-btn");
  let mainButton = document.querySelector(".mainPageButton-btn");

  if (mainButton) {
    mainButton.addEventListener("mouseenter", function () {
      glowingCircle.style.transition = "visibility 0.5s, opacity 0.5s"; // Set transition properties
      glowingCircle.style.opacity = "0.3"; // Set desired opacity for glow effect
      glowingCircle.style.visibility = "visible"; // Show the glow button
    });

    mainButton.addEventListener("mouseleave", function () {
      glowingCircle.style.opacity = "0"; // Fade out
      setTimeout(function () {
        glowingCircle.style.transition = "none"; // Disable transition to instantly hide the button
        glowingCircle.style.visibility = "hidden"; // Hide the glow button
      }, 500); // After the transition duration
    });
  }
});
