const forms = document.querySelectorAll("form");
const confirmationMessage = document.getElementById("confirmationMessage");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    form.reset();
    form.classList.remove("was-validated");

    confirmationMessage.classList.remove("d-none");

    setTimeout(() => {
      confirmationMessage.classList.add("d-none");
    }, 4000);
  });
});
