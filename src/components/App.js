import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="main-container">
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/login">Login</Link> | <Link to="/">Home</Link>
        </nav>

        <p>
          Status:{" "}
          <strong>
            {isAuthenticated ? "Authenticated ✅" : "Not Authenticated ❌"}
          </strong>
        </p>

        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} setIsAuthenticated={setIsAuthenticated} />
            )}
          />

          <PrivateRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />

          {/* Redirect unknown routes */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
