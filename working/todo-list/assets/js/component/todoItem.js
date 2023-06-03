import html from "../core.js";

function todoItem({ todo, index }) {
  return html`
    <li class="${todo.completed && "completed"}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" 
        type="checkbox" 
        ${todo.completed && "checked"}
        onchange="dispatch('toggle', ${index})"
        >
        <label>${todo.title}</label>
        <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
      </div>
      <input class="edit" value="${todo.title}" />
    </li>
  `;
}

export default todoItem;
