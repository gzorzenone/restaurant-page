import "./style.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

const header = document.createElement("div");
header.classList.add("header");

const homeTab = document.createElement("div");
homeTab.classList.add("home-tab");
homeTab.textContent = "Home";

const menuTab = document.createElement("div");
menuTab.classList.add("menu-tab");
menuTab.textContent = "Menu";

const contactTab = document.createElement("div");
contactTab.classList.add("contact-tab");
contactTab.textContent = "Contact";

header.appendChild(homeTab);
header.appendChild(menuTab);
header.appendChild(contactTab);

const content = document.createElement("div");
content.classList.add("content");

document.body.appendChild(header);
document.body.appendChild(content);

content.appendChild(loadHomePage());

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