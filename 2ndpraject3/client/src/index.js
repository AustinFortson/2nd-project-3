import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import UserInput from "./pages/UserInput";
import Search from "./pages/Search";
import Review from "./pages/Review";
import App from './App';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                <Link to="/user">User </Link>
                </li>
                <li>
                <Link to="/review">Review</Link>
                </li>
                <li>
                <Link to="/search">Contact</Link>
                </li>
            </ul>
            <Route exact path="/" component={App}/>
            <Route path="/user" component={UserInput}/>
            <Route path="/search" component={Search}/>
            <Route path="/review" component={Review}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

