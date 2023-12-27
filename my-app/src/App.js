// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import DragonsPage from './components/DragonsPage';
import MissionsPage from './components/MissionsPage';
import MyProfilePage from './components/MyProfilePage';
import '../src/App.css';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Added class name */}
        <header className="app-header">
          <nav className="navbar"> {/* Added class name */}
            <ul className="navbar-list"> {/* Added class name */}
              <li className="navbar-list-item">
                <Link to="/dragons" className="navbar-list-link">Dragons</Link> {/* Added class name */}
              </li>
              <li className="navbar-list-item">
                <Link to="/missions" className="navbar-list-link">Missions</Link> {/* Added class name */}
              </li>
              <li className="navbar-list-item">
                <Link to="/myprofile" className="navbar-list-link">My Profile</Link> {/* Added class name */}
              </li>
            </ul>
          </nav>
        </header>
        <div className="content-container"> {/* Added class name */}
          <Switch>
            <Route path="/dragons" component={DragonsPage} />
            <Route path="/missions" component={MissionsPage} />
            <Route path="/myprofile" component={MyProfilePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
