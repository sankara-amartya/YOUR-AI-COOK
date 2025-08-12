import React from "react";
import RecipeCard from "./RecipeCard";
function RecipeList({recipes , onSelectRecipe}) {
    return (
        <div>
            <h2>Recipe List</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onSelectRecipe={onSelectRecipe} 
                />
            ))}
        </div>

            <ul>
                {recipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.name}
          </li>
                ))}
            </ul>
        </div>
    );
}
export default RecipeList;