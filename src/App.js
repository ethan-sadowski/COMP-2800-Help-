
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import JobBoard from './pages/JobBoard';
import { AuthContext } from "./context/auth";

function App(props) {
  return (
    <AuthContext.Provider value={false}>
    <Router>
      <div>
        <h1>Help!</h1>
        <ul>
          <li>
            <Link to="/JobBoard">Job Board</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
        </ul>
        <Route exact path="/JobBoard" component={JobBoard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/admin" component={Admin} />
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
