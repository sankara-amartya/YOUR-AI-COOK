import React, { useState,useEffect, use } from 'react';

function AddRecipeForm({ onAddRecipe, recipeToEdit,onUpdateRecipe }) {
  // State for each input field
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (recipeToEdit) {
        setName(recipeToEdit.name);
        setCategory(recipeToEdit.category);
        setIngredients(recipeToEdit.ingredients.join(', ')); // Convert array to comma-separated string
        setInstructions(recipeToEdit.instructions);
    }
  }, [recipeToEdit]);
    
  const handleSubmit = (event) => {
    event.preventDefault(); // Stop the page from refreshing

    // Basic validation to ensure fields are not empty
    if (!name || !ingredients || !instructions) {
      alert('Please fill out all required fields.');
      return;
    }
    if (recipeToEdit) {
        const updatedRecipe = {
            ...recipeToEdit,
            name,
            category,
            ingredients: ingredients.split(',').map(item => item.trim()), // Split string into an array
            instructions,
        };
        onUpdateRecipe(updatedRecipe); // Pass the updated recipe object up to App.js
        
    }
    else {
    const newRecipe = {
      id: Date.now(), // Create a simple unique ID
      name,
      category,
      ingredients: ingredients.split(',').map(item => item.trim()), // Split string into an array
      instructions,
      mealtype: "Dinner", // You can make this an input later
      image: "https://example.com/placeholder.jpg" // Placeholder image
    };

    onAddRecipe(newRecipe); // Pass the new recipe object up to App.js
    }
    // Clear the form fields after submission
    setName('');
    setCategory('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '20px 0', borderRadius: '8px' }}>
      <h2>{recipeToEdit ? 'Edit Recipe' : 'Add a New Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Category: </label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label>Ingredients (comma-separated): </label>
          <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} style={{width: '300px'}} />
        </div>
        <div>
          <label>Instructions: </label>
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} style={{width: '300px', height: '80px'}} />
        </div>
 <button type="submit">{recipeToEdit ? 'Save Changes' : 'Add Recipe'}</button>      </form>
    </div>
  );
}

export default AddRecipeForm;