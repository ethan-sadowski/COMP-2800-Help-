
import React from "react";
import IndividualHome from "./IndividualHome";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Home(props) {
  return (
    <div><p>Home Page</p>
    <Link to="/jobs">Go to job board without signing in.</Link>
    <Route path="/jobs" component={IndividualHome} />
    </div>
  )
}

export default Home;