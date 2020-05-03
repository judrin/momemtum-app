const background = document.querySelector(".background-image");
const images = [
  "1501785888041-af3ef285b470",
  "1523712999610-f77fbcfc3843",
  "1470770841072-f978cf4d019e",
  "1567939671140-deb668d7a9f5",
  "1580851608870-fd447b328f67",
  "1574021528539-4ba9b17f880e",
  "1544085311-11a028465b03",
  "1588094504753-ddf9319e6c0b",
  "1498715880242-b861f6298237",
  "1588132290195-32a0e5e17a6b"
];

function getBgSrc(id) {
  return `https://images.unsplash.com/photo-${id}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=40`;
}

function genRandom() {
  return Math.floor(Math.random() * images.length);
}

function handleImgLoad() {
  background.style.backgroundImage = `url(${this.src})`;
}

function painImage(imgNumber) {
  const image = new Image();
  image.src = getBgSrc(images[imgNumber]);
  image.classList.add("bgImage");
  image.onload = handleImgLoad;
}

function init() {
  const randomNumnber = genRandom();
  painImage(randomNumnber);
}

init();
