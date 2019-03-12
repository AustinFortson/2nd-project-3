import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Search from "./pages/Search";
import Review from "./pages/Review";
import User from './pages/UserInput';
// import logo from './logo.svg';


 function App() {
return(
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
                <Link to="/search">Search</Link>
                </li>
            </ul>
            <Switch>
              <Route exact path="/" component={User}/>
              <Route path="/user" component={User}/>
              <Route path="/search" component={Search}/>
              <Route path="/review" component={Review}/>
            </Switch>
        </div>
    </Router>
)
}

export default App;
