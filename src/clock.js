const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function prependedNumber(number) {
  return String(number).padStart(2, "0");
}

function getTime() {
  const date = new Date();
  const hours = prependedNumber(date.getHours());
  const minutes = prependedNumber(date.getMinutes());
  const seconds = prependedNumber(date.getSeconds());

  clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
