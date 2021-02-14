import React from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Hello, About, Home, Users } from '@components'
  
const App = () => (
    <div className="container">
        <div className="logo">        
        </div>
        <hr />
        <div className="card">
            <h1>Hello from WP</h1>
        </div>
        <Router>
            <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                  <li>
                    <Link to="/hello">Hello</Link>
                  </li>
                </ul>      
              <Switch>   
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/hello">
                  <Hello />
                </Route>           
                <Route path="/">
                  <Home />
                </Route>               
              </Switch>
            </div>
        </Router>
    </div>    
)

export { App };


