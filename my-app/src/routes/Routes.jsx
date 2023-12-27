// routes/Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes as ReactRoutes, Link } from 'react-router-dom';
import DragonsPage from '../components/DragonsPage';
import MissionsPage from '../components/MissionsPage';
import MyProfilePage from '../components/MyProfilePage';

const CustomRoutes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dragons">Dragons</Link>
            </li>
            <li>
              <Link to="/missions">Missions</Link>
            </li>
            <li>
              <Link to="/myprofile">My Profile</Link>
            </li>
          </ul>
        </nav>
        <ReactRoutes>
          <Route path="/dragons" element={<DragonsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/myprofile" element={<MyProfilePage />} />
        </ReactRoutes>
      </div>
    </Router>
  );
};

export default CustomRoutes;
