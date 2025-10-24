import React from "react";

const Login = ({ setIsAuthenticated, history }) => {
  const handleLogin = () => {
    setIsAuthenticated(true);
    history.push("/"); // Redirect after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>Click below to simulate a login.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
