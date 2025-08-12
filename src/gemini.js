import { GoogleGenerativeAI } from "@google/generative-ai";

// Get the API key from the .env file
const API_KEY = process.env.REACT_APP_API_KEY;
console.log("API Key:", API_KEY); // Log
// Initialize the Generative AI model
const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateRecipe(ingredients) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  const prompt = `Given these ingredients: ${ingredients}. Suggest one simple recipe idea. Provide the name, a short list of key ingredients, and brief instructions. Format it nicely using markdown.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error generating recipe:", error);
    return "Sorry, I couldn't generate a recipe right now. Please try again later.";
  }
}