import React from "react";

function Item({ qty, name }) {
  return (
    <div className="item">
      <input type="checkbox" />
      <span contentEditable={true}>
        {qty}x {name}
      </span>
      <button>x</button>
    </div>
  );
}

export default Item;
