import html from "../core.js";
import { connect } from "../store.js";

const connector = connect(state => ({
    games: state.games,
}));

function app({games}) {
    return html`
    <ul>
        ${games.map(game => `<li>${game}</li>`)}
    </ul>

    <div>
        <button onclick="dispatch('ADD', 'Pixel')" class="btn">Add game</button>
    </div>
    `   
}

export default connector(app);
