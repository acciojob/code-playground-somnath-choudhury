import React from "react";

const Home = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <h2>Welcome to the Code Playground 🧩</h2>
      <p>This is a private route accessible only to logged-in users.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
