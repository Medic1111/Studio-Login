import { users } from "../../data/users.js";
import { getUser } from "../utils/queries.js";

const submitHandler = (e, usr, pass, feed) => {
  e.preventDefault();

  const candidate = getUser(users, usr.value);

  if (candidate) {
    if (candidate.password === pass.value) {
      feed.classList.remove("hidden");
      feed.classList.add("feedback");

      feed.innerText = "Welcome";
    } else {
      feed.classList.remove("hidden");
      feed.innerText = "Wrong password";
      feed.classList.add("feedback");
    }
  } else {
    feed.classList.remove("hidden");
    feed.innerText = "Username not registered";
    feed.classList.add("feedback");
  }

  usr.value = "";
  pass.value = "";
};

const binder = () => {
  const btn = document.getElementById("submit");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const feedback = document.getElementById("feedback");
  btn.addEventListener("click", (e) =>
    submitHandler(e, username, password, feedback)
  );
};

export default binder;
