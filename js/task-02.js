const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const makeIngredients = (items) => {
  return items.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = `${item}`;
    itemEl.classList.add("item");
    return itemEl;
  });
};

const element = makeIngredients(ingredients);
ingredientsEl.append(...element);
