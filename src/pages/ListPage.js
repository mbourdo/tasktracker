import React from "react";
import "../App.css";
import Category from "../components/Category";

function ListPage() {
  return (
    <>
      <header>
        <div className="logo">PackList</div>
        <nav>
          <a href="setup.html" className="active">New List</a>
          <a href="dash.html">Dashboard</a>
          <a href="index.html">
            <img src="assets/images/user-icon.png" alt="User Icon" className="icon user-icon" />
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
          <div className="list-header">
            <div className="back-and-info">
              <button className="back-btn">←</button>
              <div className="list-info">
                <div className="list-title-row">
                  <h2 contentEditable={true}>Trip Name</h2>
                  <img src="assets/images/pencil-icon.png" className="edit-icon" alt="Edit" />
                </div>
                <p>Date here</p>
                <p>Destination here</p>
              </div>
            </div>
          </div>

          <div id="category-list">
            <Category title="Clothes" />
            <Category title="Toiletries" />
            <Category title="Essentials" />
          </div>

          <button className="add-category">+ Add Category</button>
          <button className="save-btn">Save</button>
        </div>
      </main>
    </>
  );
}

export default ListPage;
