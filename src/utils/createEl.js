export const createEl = (el, id = null, className = null, innerText = null) => {
  const newEl = document.createElement(el);
  id && newEl.setAttribute("id", id);
  className && newEl.classList.add(className);
  innerText && (newEl.innerText = innerText);
  return newEl;
};
