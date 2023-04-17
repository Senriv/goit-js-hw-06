const refs = {
  value: document.querySelector("#value"),
  decrBtn: document.querySelector('[data-action="decrement"]'),
  incrBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

refs.decrBtn.addEventListener("click", makeDecrement);
refs.incrBtn.addEventListener("click", makeIncrement);

function makeDecrement() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function makeIncrement() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
