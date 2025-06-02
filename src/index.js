import displayHome from "./home";
import displayMenu from "./menu";
import displayAbout from "./about";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const content = document.getElementById("content");

function clearContent() {
  document.getElementById("content").innerHTML = "";
}

homeBtn.addEventListener("click", () => {
  clearContent();
  displayHome();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  displayMenu();
});

aboutBtn.addEventListener("click", () => {
  clearContent();
  displayAbout();
});

displayHome();
