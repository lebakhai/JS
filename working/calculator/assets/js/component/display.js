import html from "../core.js";
import { connect } from "../store.js";
import { operatorHtml } from "../utils/operator.js";


function display({ isEditing, calcData }) {
  return html`
    <div
      class="calc-display"
      ${!isEditing &&
      `onclick=\"dispatch('editMode');
      $('.calc-result').value = ${calcData.result};\"`}
    >
      <div class="calc-operation ${isEditing && "editing"}">
        ${calcData.operators[0].length > 0 
        &&
        calcData.operators[1].length > 0 
        && `<div class="calc-operator calc-operation-item">
        ${operatorHtml(calcData.operators).operatorHtml}
        </div>`}
        <div class='calc-result calc-operation-item' 
        ${isEditing && "contenteditable"}
        onkeydown="
        switch(event.keyCode) {
          case 13:
            dispatch('endEdit', this.textContent.trim())
            break;
          case 27:
            dispatch('exitEdit')
        }"
        >
        ${calcData && calcData.result}
        </div>
        </div>
        </div>
        `;
    }

    export default connect()(display);