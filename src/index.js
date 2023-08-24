import "./style.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

const homeTab = document.createElement("div");
homeTab.classList.add("home-tab");
homeTab.textContent = "Home";

const menuTab = document.createElement("div");
menuTab.classList.add("menu-tab");
menuTab.textContent = "Menu";

const contactTab = document.createElement("div");
contactTab.classList.add("contact-tab");
contactTab.textContent = "Contact";

const content = document.createElement("div");
content.classList.add("content");

document.body.appendChild(homeTab);
document.body.appendChild(menuTab);
document.body.appendChild(contactTab);

document.body.appendChild(content);

homeTab.addEventListener("click", () => {
  content.replaceChildren();
  content.appendChild(loadHomePage());
});

menuTab.addEventListener("click", () => {
  content.replaceChildren();
  content.appendChild(loadMenuPage());
});

contactTab.addEventListener("click", () => {
  content.replaceChildren();
  content.appendChild(loadContactPage());
});