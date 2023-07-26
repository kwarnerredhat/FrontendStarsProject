document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsDiv = document.getElementById("reviews");
    reviewForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const rating = document.getElementById("rating").value;
      const reviewText = document.getElementById("review").value;
  
      const reviewElement = document.createElement("div");
      reviewElement.innerHTML = `<p>Rating: ${rating} stars</p><p>${reviewText}</p><hr>`;
      reviewsDiv.appendChild(reviewElement);
  
      reviewForm.reset();
    });
  });
  