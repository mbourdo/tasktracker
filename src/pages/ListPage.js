import React, { useState } from "react";
import "../App.css";
import Category from "../components/Category";

function ListPage() {
  // === Trip title stored in state (still editable)
  const [tripTitle, setTripTitle] = useState("My Trip");

  // === Dates and destination are not editable here — just shown as static text
  const startDate = "Start Date";
  const endDate = "End Date";
  const destination = "Destination";

  // === Categories state (each with id + title)
  const [categories, setCategories] = useState([
    { id: 1, title: "Clothes" },
    { id: 2, title: "Toiletries" },
    { id: 3, title: "Essentials" },
  ]);

  // Add a new category
  const addCategory = () => {
    const newId = Date.now();
    setCategories([...categories, { id: newId, title: "New Category" }]);
  };

  // Delete a category by ID
  const deleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <>
      <header>
        <div className="logo">PackList</div>
        <nav>
          <a href="setup.html" className="active">New List</a>
          <a href="dash.html">Dashboard</a>
          <a href="index.html">
          <img src="/public/assets/images/pencil-icon.png" className="edit-icon" alt="Edit" />

          </a>
        </nav>
      </header>

      <div className="progress-bar-container">
        <div className="progress-steps">
          <span className="step">Set Up</span>
          <span className="step active">Edit</span>
          <span className="step">Save</span>
        </div>
        <div className="progress-line">
          <div className="progress-fill edit"></div>
        </div>
      </div>

      <main className="list-container">
        <div className="list-card">
          {/* === Trip Header Info === */}
          <div className="list-header">
            <div className="back-and-info">
              <button className="back-btn">←</button>

              <div className="list-info">
                {/* Editable Trip Title */}
                <div className="list-title-row">
                  <h2
                    contentEditable={true}
                    suppressContentEditableWarning
                    onBlur={(e) => setTripTitle(e.target.textContent)}
                  >
                    {tripTitle}
                  </h2>
                  <img src="/assets/images/pencil-icon.png" className="edit-icon" alt="Edit" />

                </div>

                {/* Static text for dates and destination */}
                <p>{startDate} - {endDate}</p>
                <p>{destination}</p>
              </div>
            </div>
          </div>

          {/* Render all categories */}
          <div id="category-list">
            {categories.map((cat) => (
              <Category
                key={cat.id}
                id={cat.id}
                title={cat.title}
                onDelete={() => deleteCategory(cat.id)}
              />
            ))}
          </div>

          <button className="add-category" onClick={addCategory}>
            + Add Category
          </button>
          <button className="save-btn">Save</button>
        </div>
      </main>
    </>
  );
}

export default ListPage;
