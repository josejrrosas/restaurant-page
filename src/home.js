function displayHome() {
  const content = document.getElementById("content");

  const headliner = document.createElement("h1");
  headliner.textContent = "Welcome to Mario's Trattoria";
  content.appendChild(headliner);

  const contentImg = document.createElement("img");
  contentImg.src =
    "https://media.istockphoto.com/id/1975701807/photo/bucatini-pasta-with-tomato-sauce-and-basil-leaves.jpg?s=1024x1024&w=is&k=20&c=Ya8m3IoV5K6H_HOb2Ao-VpHlqv8rOLYO2SF4x0RHBYI=";
  contentImg.alt = "A delicious dish from our restaurant";
  contentImg.width = 400;
  content.appendChild(contentImg);

  const contentP = document.createElement("p");
  contentP.textContent =
    "Experience the finest Italian cuisine this side of the Mushroom Kingdom.Handmade pasta, wood-fired pizzas, and a warm family atmosphere await!";
  content.appendChild(contentP);

  headliner.classList.add("headliner");
  contentP.classList.add("contentP");
}

export default displayHome;
