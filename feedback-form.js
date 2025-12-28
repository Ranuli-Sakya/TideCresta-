const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!feedbackForm.checkValidity()) {
    feedbackForm.classList.add("was-validated");
    return;
  }

  feedbackForm.reset();
  feedbackForm.classList.remove("was-validated");

  alert("✅ Thank you for your submission. Our team will review it shortly.");
});
