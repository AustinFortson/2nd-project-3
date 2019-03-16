import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import EnhancedTable from "./pages/Search";
import Review from "./pages/Review";
import UserInput from './pages/UserInput';
import Login from './pages/Login';
// import logo from './logo.svg';


 function App() {
return(
    <Router>
        <div>
            <Switch>
              <Route exact path="/" component={UserInput}/>
              <Route path="/user" component={UserInput}/>
              <Route path="/search" component={EnhancedTable}/>
              <Route path="/review" component={Review}/>
              {/* <Route path="/login" component={Login}/> */}
            </Switch>
        </div>
    </Router>
)
}

export default App;
