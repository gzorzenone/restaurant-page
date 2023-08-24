let items = [
  {
    "flavor": "French Vanilla",
    "price": "3.00"
  },
  {
    "flavor": "Caramel Macchiato",
    "price": "3.75"
  }
];

function loadMenuPage() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  items.forEach((value) => {
    const item = document.createElement("div");
    item.classList.add("item");
    const flavor = document.createElement("p");
    flavor.classList.add("flavor");
    flavor.textContent = value.flavor;
    item.appendChild(flavor);
    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = value.price;
    item.appendChild(price);
    menu.appendChild(item);
  });

  return menu;
}

export default loadMenuPage;