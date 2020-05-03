const tempC = document.querySelector(".js-temp-c"),
  city = document.querySelector(".js-location");

const API_KEY = "a61af7f793bbbb6a931a483344ac5231";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const place = data.name;
      tempC.innerText = `${temperature} °C`;
      city.innerText = `${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const coordsObj = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  saveCoords(coordsObj);
  getWeather(coordsObj.lat, coordsObj.lng);
}

function handleGeoError(error) {
  console.log(error);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);

  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.lat, parsedCoords.lng);
  }
}

function init() {
  loadCoords();
}

init();
