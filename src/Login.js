
import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.module.css";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
    navigate("/recipe");
  };

  return (
    <>
      {/* Decorative food icons for background */}
      <span className="food-icon fork" role="img" aria-label="fork">🍴</span>
      <span className="food-icon spoon" role="img" aria-label="spoon">🥄</span>
      <span className="food-icon pizza" role="img" aria-label="pizza">🍕</span>
      <span className="food-icon cupcake" role="img" aria-label="cupcake">🧁</span>
      <div className="login-container">
        <h1>
          <span role="img" aria-label="chef">👨‍🍳</span> Welcome Back!
        </h1>
        <div className="subtitle">Sign in to discover & share delicious recipes 🍲</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" autoComplete="username" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" autoComplete="current-password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;