"use strict";
// research "use strict"

// COMPONENTS
import nav from "./components/nav.js";
import main from "./components/main.js";
import binder from "./bizz/main.js";

// ROOT
const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.append(root);

// UI-COMPONENTS
const appNav = nav;
root.appendChild(appNav);
root.append(main);

// BUSINESS LOGIC
binder();
