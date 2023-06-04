import html from "../core.js";
function display() {
    return html`
    <div class="calc-display">
    <div class="calc-operation">
        <div class="calc-operator calc-operation-item">4 <span class="operator">+</span> 9</div>
        <div class="calc-result calc-operation-item">13</div>
    </div>
    </div>
`
}

export default display;