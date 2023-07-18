import { createEl } from "../utils/createEl.js";

const main = (() => {
  const main = createEl("main", "main", "main", null);
  const form = createEl("form", "form", "form", null);

  const username = createEl("input", "username", "username", null);
  username.setAttribute("placeholder", "username");

  const password = createEl("input", "password", "password", null);
  password.setAttribute("placeholder", "password");
  password.setAttribute("type", "password");

  const submit = createEl("input", "submit", "submit", null);
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "SUBMIT");

  const feedback = createEl("p", "feedback", "hidden", "whatever");

  form.appendChild(username);
  form.appendChild(password);
  form.appendChild(feedback);
  form.appendChild(submit);

  main.append(form);
  return main;
})();

export default main;
