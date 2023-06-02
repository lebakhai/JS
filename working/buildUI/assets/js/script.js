import {attach} from "./store.js";
import app from "./component/app.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

attach(app, $('#app'));