import app from "./component/app.js";
import { attach } from "./store.js";

attach(app, document.querySelector("#app"));