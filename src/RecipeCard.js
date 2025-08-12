import React from 'react';

// It must receive 'recipe' and 'onSelectRecipe' as props
function RecipeCard({ recipe, onSelectRecipe }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '250px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ backgroundColor: '#eee', height: '150px', marginBottom: '10px', borderRadius: '4px' }}></div>
      <h3>{recipe.name}</h3>
      <p style={{ color: '#555' }}>Category: {recipe.category}</p>

      {/* This button is the missing piece! */}
      <button onClick={() => onSelectRecipe(recipe)}>
        View Details
      </button>
    </div>
  );
}

export default RecipeCard;