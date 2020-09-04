const form = document.querySelector(".form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".greetings");

const USER_LS = "GAGA";
const SHOW = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintName(currentValue);
  saveName(currentValue);
}

function paintName(text) {
  form.classList.remove(SHOW);
  greetings.classList.add(SHOW);
  greetings.innerText = `Hello ${text}`;
}

function askForName() {
  form.classList.add(SHOW);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintName(currentUser);
  }
}

function init() {
  loadName();
}

init();
