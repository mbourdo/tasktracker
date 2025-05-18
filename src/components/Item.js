import React from "react";

// The Item component shows one row (checkbox, name, delete button)
function Item({ qty, name, onDelete }) {
  return (
    <div className="item">
      {/* Checkbox — doesn’t store state yet, purely visual */}
      <input type="checkbox" />

      {/* The item text is editable in the browser */}
      <span contentEditable={true}>
        {qty}x {name}
      </span>

      {/* Delete this item using the callback passed from Category */}
      <button onClick={onDelete}>x</button>
    </div>
  );
}

export default Item;
