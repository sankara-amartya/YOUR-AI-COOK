import React, { useState } from 'react';
import { generateRecipe } from './gemini'; // Import our AI function

function RecipeSuggester() {
  const [ingredients, setIngredients] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSuggestClick = async () => {
    if (!ingredients) {
      alert('Please enter some ingredients.');
      return;
    }
    setIsLoading(true);
    setSuggestion(''); // Clear previous suggestion
    const result = await generateRecipe(ingredients);
    setSuggestion(result);
    setIsLoading(false);
  };

  return (
    <div style={{ border: '1px solid #007bff', padding: '20px', margin: '20px 0', borderRadius: '8px' }}>
      <h2>🤖 AI Recipe Suggester</h2>
      <p>Enter ingredients you have, and the AI will suggest a recipe!</p>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="e.g., chicken breast, broccoli, rice, soy sauce"
        style={{ width: '95%', height: '60px', padding: '10px' }}
      />
      <br />
      <button onClick={handleSuggestClick} disabled={isLoading} style={{ marginTop: '10px' }}>
        {isLoading ? 'Thinking...' : 'Get Suggestion'}
      </button>

      {suggestion && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
          <h4>Suggestion:</h4>
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeSuggester;