import displayHome from "./home";
import displayMenu from "./menu";
import displayAbout from "./about";
import './style.css';

const tabs = [
  { id: "home-btn", action: displayHome },
  { id: "menu-btn", action: displayMenu },
  { id: "about-btn", action: displayAbout },
];

const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

tabs.forEach(tab => {
  const button = document.getElementById(tab.id);
  button.addEventListener("click", () => {
    clearContent();
    tab.action();
  });
});

// Load home tab by default
displayHome();
