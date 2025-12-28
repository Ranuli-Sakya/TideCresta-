document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link && link !== "#") {
      window.location.href = link;
    }
  });

  // Keyboard accessibility
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const link = card.getAttribute("data-link");
      if (link && link !== "#") {
        window.location.href = link;
      }
    }
  });
});
