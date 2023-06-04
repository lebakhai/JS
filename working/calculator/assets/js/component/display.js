import html from "../core.js";
import { connect } from "../store.js";

function display({isEditing}) {
    return html`
    <div class="calc-display" ${!isEditing && "onclick=\"dispatch('editMode')\""}>
    <div class="calc-operation ${isEditing && 'editing'}">
        <div class="calc-operator calc-operation-item">
        4 <span class="operator">+</span> 9
        </div>
        ${isEditing && "<input type='text' class='calc-result calc-operation-item'>" 
        || "<div class='calc-result calc-operation-item'>13</div>"}
    </div>
    </div>
`
}

export default connect()(display);