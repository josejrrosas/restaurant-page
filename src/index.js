import displayHome from "./home";
import displayMenu from "./menu";
import displayAbout from "./about";
import './style.css';

const tabMap = {
  "home-btn": displayHome,
  "menu-btn": displayMenu,
  "about-btn": displayAbout,
};

function clearContent() {
  document.getElementById("content").innerHTML = "";
}

// Set up event listeners for each tab button
Object.entries(tabMap).forEach(([btnId, tabFunction]) => {
  const button = document.getElementById(btnId);
  button.addEventListener("click", () => {
    clearContent();
    tabFunction();
  });
});

// Load default tab
displayHome();
