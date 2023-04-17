const refs = {
  rangeInput: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

const textSizing = () => {
  refs.textEl.style.fontSize = `${refs.rangeInput.value}px`;
};

textSizing();
refs.rangeInput.addEventListener("input", textSizing);
