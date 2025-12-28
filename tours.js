const tourButtons = document.querySelectorAll("[data-tour]");
const selectedTourInput = document.getElementById("selectedTour");
const form = document.getElementById("tourInquiryForm");

tourButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedTourInput.value = button.getAttribute("data-tour");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  form.reset();
  form.classList.remove("was-validated");

  alert("✅ Your tour inquiry has been submitted. Our team will contact you shortly.");
});
