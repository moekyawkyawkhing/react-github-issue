import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Opened from './Opened';
import Closed from './Closed';
import NewIssue from './NewIssue';

class Header extends React.Component {
    render() {
        return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Issues</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/opened">Opened</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/closed">Closed</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new_issue">New Issue</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/opened">
                <Opened />
            </Route>
            <Route path="/closed">
                <Closed />
            </Route>
            <Route path="/new_issue">
                <NewIssue />
            </Route>
        </Router>
        );
    }
}

export default Header;