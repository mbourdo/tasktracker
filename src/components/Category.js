import React from "react";
import Item from "./Item";

function Category({ title }) {
  return (
    <div className="category">
      <div className="category-header">
        <div className="left-side">
          <button className="collapse-btn">▾</button>
          <div className="cat-title-row">
            <h3 contentEditable={true}>{title}</h3>
            <img src="assets/images/pencil-icon.png" className="edit-icon" alt="Edit" />
          </div>
        </div>
        <button className="delete-btn">x</button>
      </div>

      <div className="items">
        <Item qty={2} name="Shirts" />
        <Item qty={1} name="Jeans" />
        <div className="add-item">
          <input type="text" placeholder="+ Add item (Quantity, Name)" />
        </div>
      </div>
    </div>
  );
}

export default Category;
