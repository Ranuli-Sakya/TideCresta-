const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatLog = document.getElementById("chatLog");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = chatInput.value.trim();
  if (!message) return;

  // User message
  const userMessage = document.createElement("div");
  userMessage.className = "mb-2";
  userMessage.innerHTML = `<strong>You:</strong> <span>${message}</span>`;
  chatLog.appendChild(userMessage);

  chatInput.value = "";
  chatLog.scrollTop = chatLog.scrollHeight;

  // Simulated reception reply
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.className = "mb-2";
    reply.innerHTML = `
      <strong>Reception:</strong>
      <span>Thank you for your message. Our team will assist you shortly.</span>
    `;
    chatLog.appendChild(reply);
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 1000);
});
