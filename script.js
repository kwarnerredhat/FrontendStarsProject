function submitReview() {
    const summaryInput = document.getElementById("summary");
    const reviewInput = document.getElementById("review");
    const reviewsDiv = document.getElementById("reviews");

    const summary = summaryInput.value.trim();
    const review = reviewInput.value.trim();

    if (summary === "" || review === "") {
        alert("Please enter both summary and review.");
        return;
    }

    const reviewContainer = document.createElement("div");
    const reviewSummary = document.createElement("h3");
    const reviewText = document.createElement("p");

    reviewSummary.innerText = summary;
    reviewText.innerText = review;

    reviewContainer.appendChild(reviewSummary);
    reviewContainer.appendChild(reviewText);
    reviewsDiv.appendChild(reviewContainer);
    summaryInput.value = "";
    reviewInput.value = "";
}