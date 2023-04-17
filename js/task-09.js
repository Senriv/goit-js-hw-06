function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  textColor: document.querySelector(".color"),
  colorBtn: document.querySelector(".change-color"),
};

refs.colorBtn.addEventListener("click", onBackgroundEl);

function onBackgroundEl() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.textColor.textContent = color;
}
