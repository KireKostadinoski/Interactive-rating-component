document.addEventListener("DOMContentLoaded", () => {
  const ratings = document.querySelectorAll(".rating");
  const submitBtn = document.getElementById("submitBtn");
  const thankYouContainer = document.getElementById("thankYouContainer");
  const ratingContainer = document.querySelector(".rating-container");
  const selectedSpan = document.getElementById("selected");
  let selectedRating = null;

  ratings.forEach((rating) => {
    rating.addEventListener("click", function () {
      // Remove bg-Orange from all ratings
      ratings.forEach((r) => {
        r.classList.remove("bg-Orange", "text-black");
        r.classList.add("bg-gray-700", "text-gray-400"); // Restore default gray background

        selectedRating = this.textContent;

      });

      // Add bg-Orange to the clicked rating
      this.classList.remove("bg-gray-700", "text-gray-400");
      this.classList.add("bg-Orange", "text-black");
    });

    submitBtn.addEventListener("click", function () {
      if (selectedRating) {
        // Update the selected rating text
        selectedSpan.innerHTML = selectedRating;

        // Hide the rating container and show the thank you container
        ratingContainer.classList.add("hidden");
        thankYouContainer.classList.remove("hidden");
      } else {
        alert("Please select a rating before submitting.");
      }
    });
  });
});
