import React from 'react';

function RecipeDetail({ recipe, onBackClick, onDeleteClick,onEditClick }) {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the recipe "${recipe.name}"?`)) {
      onDeleteClick(recipe.id);
    }
  };
  return (
    <div>
      {/* The "Back to List" button calls the function passed as a prop */}
      <button onClick={onBackClick}>← Back to List</button>
      <h2>{recipe.name}</h2>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Meal Type:</strong> {recipe.mealtype}</p>

      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h4>Instructions:</h4>
      <p>{recipe.instructions}</p>
      <button onClick={onEditClick} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
        Edit Recipe
      </button>
      <button 
      onClick={handleDelete}
      style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', marginTop: '20px' }}>
        Delete Recipe
      </button>
    </div>
  );
}

export default RecipeDetail;