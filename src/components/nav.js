import { createEl } from "../utils/createEl.js";

const nav = (() => {
  const nav = createEl("nav", "nav", "nav");

  const logo = document.createElement("img");
  logo.classList.add("img");
  logo.setAttribute("src", "../assets/img.svg");
  logo.setAttribute("alt", "a image of a logo");

  const logoP = createEl("p", "logoP", "logoP", "Login");
  // research on skipping if default value

  nav.appendChild(logo);
  nav.appendChild(logoP);

  return nav;
})();

// Immediately Invoked Functions (advanced concept in JS)

export default nav;
