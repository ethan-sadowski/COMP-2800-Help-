import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Registration from "./Registration";
import IndividualHome from "./IndividualHome";
import EmployerHome from "./EmployerHome";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="header">
                    <h1>Landing Page Here</h1>
                    <p>log in buttons and forms here</p>
                    <NavLink to="/IndividualHome">Log in as individual user</NavLink>
                    <br></br>
                    <NavLink to="/EmployerHome">Log in as a business</NavLink>
                    <br></br>
                    <NavLink to="/Registration">Register</NavLink>
                    <br></br>
                    <NavLink to="/IndividualHome">Look at job board without logging in.</NavLink>
                </div>
                <div className="content">
                    <Route path="/IndividualHome" component={IndividualHome}/>
                    <Route path="/EmployerHome" component={EmployerHome}/>
                    <Route path="/Registration" component={Registration}/>
                </div>
            </HashRouter>
        );
    }
}

export default Main;