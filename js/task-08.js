const refs = {
  formEl: document.querySelector(".login-form"),
};

refs.formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all input fields!");
  } else {
    const obj = { email: email.value, password: password.value };
    console.log(obj);
    event.currentTarget.reset();
  }
}
