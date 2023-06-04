import html from "../core.js";
import { connect } from "../store.js";

function display({ isEditing, calcData }) {
  return html`
    <div
      class="calc-display"
      ${!isEditing &&
      `onclick=\"dispatch('editMode');
      $('.calc-result').value = ${calcData.result};\"`}
    >
      <div class="calc-operation ${isEditing && "editing"}">
        <div class="calc-operator calc-operation-item">
          4 <span class="operator">+</span> 9
        </div>
        <div class='calc-result calc-operation-item' ${isEditing && "contenteditable"}>${calcData && calcData.result}</div>
      </div>
    </div>
  `;
}

export default connect()(display);
