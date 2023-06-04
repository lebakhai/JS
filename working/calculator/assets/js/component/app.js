import html from "../core.js";
import { connect } from "../store.js";
import display from "./display.js";
import buttons from "./buttons.js";

function app() {
    return html`
    <div class="calc">
    ${display()}
    ${buttons()}
    </div>
    `
}

export default app;