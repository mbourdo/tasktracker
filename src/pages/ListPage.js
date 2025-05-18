import React, { useState, useEffect } from "react";
import "../App.css";
import Category from "../components/Category"; // Component for each category box
import { db } from "../firebase"; // Firestore database reference
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firestore functions

function ListPage() {
  // Title of the current trip/list; also used as the document ID in Firestore
  const [tripTitle, setTripTitle] = useState("My Trip");

  // Placeholder values for trip metadata (not editable here)
  const startDate = "Start Date";
  const endDate = "End Date";
  const destination = "Destination";

  // Categories array; each category contains an id, title, and a list of items
  const [categories, setCategories] = useState([]);

  // When tripTitle changes, load the associated list from Firebase
  useEffect(() => {
    const loadList = async () => {
      try {
        const docRef = doc(db, "lists", tripTitle); // Document path: lists/{tripTitle}
        const docSnap = await getDoc(docRef); // Attempt to get document from Firestore

        if (docSnap.exists()) {
          // If document exists, set categories from saved data
          const data = docSnap.data();
          setCategories(data.categories || []);
        } else {
          // If no list exists for this title, create two default categories
          const timestamp = Date.now();
          setCategories([
            {
              id: timestamp,
              title: "Clothes",
              items: []
            },
            {
              id: timestamp + 1,
              title: "Essentials",
              items: []
            }
          ]);
        }
      } catch (error) {
        console.error("Error loading list:", error);
      }
    };

    loadList(); // Run the async function
  }, [tripTitle]); // Dependency: re-run when tripTitle changes

  // Add a new empty category to the list
  const addCategory = () => {
    const newId = Date.now();
    setCategories([
      ...categories,
      {
        id: newId,
        title: "New Category",
        items: []
      }
    ]);
  };

  // Remove a category by its id
  const deleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  // Update items array within a specific category
  const updateCategoryItems = (catId, newItems) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === catId ? { ...cat, items: newItems } : cat
      )
    );
  };

  // Save current list to Firebase using tripTitle as the document ID
  const saveList = async () => {
    try {
      await setDoc(doc(db, "lists", tripTitle), {
        tripTitle,
        categories,
        timestamp: Date.now()
      });
      alert("List saved!");
    } catch (error) {
      console.error("Error saving list:", error);
      alert("Failed to save list.");
    }
  };

  return (
    <>
      {/* Header with navigation */}
      <header>
        <div className="logo">PackList</div>
        <nav>
          <a href="setup.html" className="active">New List</a>
          <a href="dash.html">Dashboard</a>
        </nav>
      </header>

      {/* Progress bar indicating page step */}
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

      {/* Main container for the list editor */}
      <main className="list-container">
        <div className="list-card">
          {/* Trip info section */}
          <div className="list-header">
            <div className="back-and-info">
              <button className="back-btn">←</button>
              <div className="list-info">
                {/* Editable trip title */}
                <div className="list-title-row">
                  <h2
                    contentEditable={true}
                    suppressContentEditableWarning
                    onBlur={(e) => setTripTitle(e.target.textContent)}
                  >
                    {tripTitle}
                  </h2>
                </div>
                {/* Static text for trip metadata */}
                <p>{startDate} - {endDate}</p>
                <p>{destination}</p>
              </div>
            </div>
          </div>

          {/* List of all categories */}
          <div id="category-list">
            {categories.map((cat) => (
              <Category
                key={cat.id}
                id={cat.id}
                title={cat.title}
                items={cat.items}
                onDelete={() => deleteCategory(cat.id)}
                onItemsChange={(newItems) => updateCategoryItems(cat.id, newItems)}
              />
            ))}
          </div>

          {/* Button to add category and to save the list */}
          <button className="add-category" onClick={addCategory}>
            + Add Category
          </button>
          <button className="save-btn" onClick={saveList}>
            Save
          </button>
        </div>
      </main>
    </>
  );
}

export default ListPage;
