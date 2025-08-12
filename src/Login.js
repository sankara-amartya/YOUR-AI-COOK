import React from "react";

// 1. Receive the 'onLogin' function as a prop
function Login({ onLogin }) {

  // 2. Create a function to handle the form submission
  const handleSubmit = (event) => {
    // 3. This is the magic line that stops the page refresh
    event.preventDefault();

    // 4. Call the onLogin function that was passed down from App.js
    onLogin();
  };

  // 5. Tell the form to use your handleSubmit function
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;