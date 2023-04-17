const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onChangeName);

function onChangeName(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}
