const initialContainer = document.querySelector(".initial-container"),
  mainContainer = document.querySelector(".main-container"),
  form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  clock = document.querySelector(".js-clock");

const USER_LS = "currentUser",
  HIDE_CL = "hide";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const parent = initialContainer.parentNode;
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);

  parent.removeChild(initialContainer);
}

function askForName() {
  initialContainer.classList.remove(HIDE_CL);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  const hh = parseInt(clock.innerText.split(":")[0], 10);
  let msg = `Hello ${text}`;

  initialContainer.classList.add(HIDE_CL);
  mainContainer.classList.remove(HIDE_CL);

  if (hh >= 18) {
    msg = `Good evening, ${text}`;
  } else if (hh >= 12) {
    msg = `Good afternoon, ${text}`;
  } else if (hh >= 5) {
    msg = `Good morning, ${text}`;
  }

  greeting.innerText = msg;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
