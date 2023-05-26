// Selectors

let emailInput = document.querySelector(".email-input");
let emailError = document.querySelector(".email-error");
let submitBtn = document.querySelector(".submit-btn");
let container = document.querySelector(".container");

let card1 = document.querySelector(".card");
let dismissBtn = document.querySelector(".dismiss-btn");

let email;
let card2;

// list of valid emails
let emails = [".com", ".org", "net", "info"];

function emailValidity() {
  if (
    emailInput.value.includes("@") &&
    emails.some((email) => emailInput.value.includes(email))
  ) {
    emailError.style.display = "none";
    submitBtn.style.cursor = "pointer";
    submitBtn.style.backgroundColor = "hsl(4, 100%, 67%)";
  } else {
    emailError.style.display = "block";
    submitBtn.style.cursor = "not-allowed";
  }
}

function submit() {
  card1.remove();
  container.insertAdjacentHTML(
    "afterend",
    `<div class="card-2">
  <img src="./assets/images/icon-list.svg" alt="">
  <h2>Thanks for subscribing!</h2>
  <p>A confirmation email has been sent to <span class="email"> ${emailInput.value} </span>.
    Please open it and click the button inside to confirm your subscription.</p>
  <button class="dismiss-btn"> Dismiss message</button>
</div>`
  );
  email = document.querySelector(".email");
  card2 = document.querySelector(".card-2");
  dismissBtn = document.querySelector(".dismiss-btn");
  dismissBTN();
  email.style.fontWeight = "bold";
}

emailInput.addEventListener("keyup", emailValidity);
submitBtn.addEventListener("click", submit);
emailInput.addEventListener("keyup", (e) => {
  if (
    e.key == "Enter" &&
    emailInput.value.includes("@") &&
    emails.some((email) => emailInput.value.includes(email))
  ) {
    console.log("yes");
    submit();
  }
});

function dismissBTN() {
  dismissBtn.addEventListener("click", () => {
    location.reload();
  });
}
