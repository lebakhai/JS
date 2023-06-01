import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function app(props) {
    console.log(props)
    return html`
        <ul> 
            <li></li>
        </ul>
    `
}

export default connector(app);
