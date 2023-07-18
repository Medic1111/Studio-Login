"use strict";
// Components
import nav from "./components/nav.js";
// research "use strict"

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.append(root);

// UI-COMPONENTS
const appNav = nav;
root.appendChild(appNav);
