import "./style.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu";

const homeTab = document.createElement("div");
homeTab.classList.add("home-tab");
homeTab.textContent = "Home";

const menuTab = document.createElement("div");
menuTab.classList.add("menu-tab");
menuTab.textContent = "Menu";

const content = document.createElement("div");
content.classList.add("content");

document.body.appendChild(homeTab);
document.body.appendChild(menuTab);

document.body.appendChild(content);

homeTab.addEventListener("click", () => {
  content.replaceChildren();
  content.appendChild(loadHomePage());
});

menuTab.addEventListener("click", () => {
  content.replaceChildren();
  content.appendChild(loadMenuPage());
});