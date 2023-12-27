// components/MyProfilePage.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css'; // Import the CSS file

const MyProfilePage = () => {
  const reservedDragons = useSelector((state) =>
    state.dragons.filter((dragon) => dragon.reserved)
  );
  const reservedMissions = useSelector((state) =>
    state.missions.filter((mission) => mission.reserved)
  );

  return (
    <div className="my-profile-page-container">
      <h1 className="my-profile-page-title">My Profile Page</h1>
      <table className="profile-table">
        <thead>
          <tr>
            <th>My Dragons</th>
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul className="reserved-dragons-list">
                {reservedDragons.map((dragon) => (
                  <li key={dragon.id} className="reserved-dragon-item">
                    {dragon.name}
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="reserved-missions-list">
                {reservedMissions.map((mission) => (
                  <li key={mission.mission_id} className="reserved-mission-item">
                    {mission.mission_name}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyProfilePage;
