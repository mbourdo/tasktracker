import React, { useState } from "react";
import Item from "./Item";

function Category({ title, onDelete }) {
  // Start with an empty list — no items hardcoded
  const [items, setItems] = useState([]);

  // Collapsed state controls whether items are visible
  const [collapsed, setCollapsed] = useState(false);

  // Add a new item on Enter key
  const handleAddItem = (e) => {
    if (e.key === "Enter") {
      const input = e.target.value.trim();
      if (!input) return;

      // Try to extract quantity + name from input
      const match =
        input.match(/^(\d+)[x,]?\s*(.+)$/i) || input.match(/^(.+?)\s*x\s*(\d+)$/i);
      const qty = match
        ? match[1].match(/^\d+$/)
          ? parseInt(match[1])
          : parseInt(match[2])
        : 1;
      const name = match
        ? match[1].match(/^\d+$/)
          ? match[2]
          : match[1]
        : input;

      // Add to item list
      setItems((prev) => [...prev, { id: Date.now(), name: name.trim(), qty }]);

      // Clear the input box
      e.target.value = "";
    }
  };

  // Delete one item by its id
  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Toggle collapse state
  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="category">
      <div className="category-header">
        <div className="left-side">
          {/* Collapse icon toggles section open/closed */}
          <button className="collapse-btn" onClick={toggleCollapse}>
            {collapsed ? "▸" : "▾"}
          </button>

          {/* Editable category title (not stored yet) */}
          <div className="cat-title-row">
            <h3 contentEditable={true}>{title}</h3>
            <img
              src="assets/images/pencil-icon.png"
              className="edit-icon"
              alt="Edit"
            />
          </div>
        </div>

        {/* Delete this category using callback from parent */}
        <button className="delete-btn" onClick={onDelete}>
          x
        </button>
      </div>

      {/* Only show the items if not collapsed */}
      <div className={`items ${collapsed ? "collapsed" : ""}`}>
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            qty={item.qty}
            onDelete={() => handleDeleteItem(item.id)}
          />
        ))}

        {/* Text input to add new items */}
        <div className="add-item">
          <input
            type="text"
            placeholder="+ Add item (Quantity, Name)"
            onKeyDown={handleAddItem}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
