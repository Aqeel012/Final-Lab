// components/MissionsPage.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission, fetchMissions } from '../slices/missionsSlice';
import '../App.css'; // Import the CSS file

const MissionsPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="missions-page-container">
      <h1 className="missions-page-title">Missions Page</h1>
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{mission.reserved ? 'Member' : 'Not a Member'}</td>
              <td>
                {mission.reserved ? (
                  <button
                    className="leave-mission-button"
                    onClick={() => dispatch(leaveMission(mission.mission_id))}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    className="join-mission-button"
                    onClick={() => dispatch(joinMission(mission.mission_id))}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsPage;
