function displayMenu() {
  const content = document.querySelector("#content");
  const headerText = document.createElement("h2");
  const menuText = document.createElement("p");
  const menu2Text = document.createElement("p");
  const menu3Text = document.createElement("p");

  headerText.textContent = "Check Out Our Menu!";
  menuText.textContent = "Burger";
  menu2Text.textContent = "Pizza";
  menu3Text.textContent = "Chicken Nugget";

  content.appendChild(headerText);
  content.appendChild(menuText);
  content.appendChild(menu2Text);
  content.appendChild(menu3Text);

  headerText.classList.add("headerText");
  menuText.classList.add("menuParagraph");
  menu2Text.classList.add("menuParagraph");
  menu3Text.classList.add("menuParagraph");
}

export default displayMenu;
