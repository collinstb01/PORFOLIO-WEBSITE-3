const sendEmailBtn = document.getElementById("sendEmailBtn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subj = document.getElementById("subj");
const message = document.getElementById("message");

sendEmailBtn.addEventListener("click", () => {
  let nameInput = name.value;
  let emailInput = email.value;
  let subjInput = subj.value;
  let messageInput = message.value;
  console.log("------------- sending email --------------");
  // send email to collinstb01@gmail.com
});

// https://github.com/collinstb01/Memories-App-Client.git
