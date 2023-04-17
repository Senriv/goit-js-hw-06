const categoriesEl = document.querySelector("#categories");
const numberCategories = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach((item) => {
  const elemName = item.querySelector("h2").textContent;
  const elemCount = item.querySelectorAll("li").length;
  console.log(`Category: ${elemName}`);
  console.log(`Elements: ${elemCount}`);
});
