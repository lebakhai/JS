import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function app({animals}) {
    return html`
    <ul>
        ${animals.map(animal => `<li>${animal}</li>`)}
    </ul>
    `
}

export default connector(app);