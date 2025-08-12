import React, { useState, useEffect } from "react";
import initialRecipes from "./recipes";
import Login from "./Login";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import AddRecipeForm from "./AddRecipeForm";
import RecipeSuggester from "./RecipeSuggester"; // ✅ EDIT 1: IMPORTED

function App() {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      return JSON.parse(savedRecipes);
    }
    return initialRecipes;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleLogin = (username, password) => {
    setIsLoggedIn(true);
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setIsEditing(false); // Ensure we exit edit mode when selecting a new recipe
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
    setIsEditing(false); // Also exit edit mode when going back
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (recipeId) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
    setSelectedRecipe(null);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateRecipe = (updatedRecipe) => {
    setRecipes(recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe));
    setIsEditing(false);
    setSelectedRecipe(null);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>My Recipe App</h1>
          {selectedRecipe ? (
            isEditing ? (
              <AddRecipeForm
                recipeToEdit={selectedRecipe}
                
                onUpdateRecipe={handleUpdateRecipe}
              />
            ) : (
              <RecipeDetail
                recipe={selectedRecipe}
                onBackClick={handleBackToList}
                onDeleteRecipe={handleDeleteRecipe} // Changed from onDeleteClick to match prop
                onEditClick={handleEditClick}
              />
            )
          ) : (
            <>
              <RecipeSuggester /> {/* ✅ EDIT 2: PLACED COMPONENT */}
              <AddRecipeForm onAddRecipe={handleAddRecipe} /> {/* ✅ EDIT 3: BUG FIXED */}
              <RecipeList
                recipes={recipes}
                onSelectRecipe={handleSelectRecipe}
              />
            </>
          )}
        </div>
      ) : (
        <Login onLogin={handleLogin} 
        onclick="/login"/>
      )}
    </div>
  );
}

export default App;