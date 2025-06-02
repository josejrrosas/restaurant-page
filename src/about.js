function displayAbout() {
  const content = document.querySelector("#content");

  const headerText = document.createElement("h2");
  headerText.textContent = "About Mario's Trattoria";

  const aboutParagraph = document.createElement("p");
  aboutParagraph.textContent =
    "Mario's Trattoria was founded in 1992 by the legendary chef Mario himself. Our passion for authentic Italian cuisine has brought generations of families together over handcrafted pasta and wood-fired pizza.";

  const secondParagraph = document.createElement("p");
  secondParagraph.textContent =
    "We believe in fresh ingredients, bold flavors, and a dining experience that's warm and unforgettable. Whether it's your first time or your hundredth, you're part of the family here.";

  headerText.classList.add("about-heading");
  aboutParagraph.classList.add("about-text");
  secondParagraph.classList.add("about-text");

  content.appendChild(headerText);
  content.appendChild(aboutParagraph);
  content.appendChild(secondParagraph);
}

export default displayAbout;
