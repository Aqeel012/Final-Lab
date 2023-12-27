// components/DragonsPage.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveDragon, cancelDragonReservation, fetchDragons } from '../slices/dragonsSlice';
import '../App.css'; // Import the CSS file

const DragonsPage = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <div className="dragons-page-container">
      <h1 className="dragons-page-title">Dragons Page</h1>
      {dragons.map((dragon) => (
        <div key={dragon.id} className="dragon-card">
          <img src={dragon.flickr_images[0]} alt={dragon.name} className="dragon-image" />
          <div className="dragon-details">
            <h2>{dragon.name}</h2>
            <p>{dragon.description}</p>
            {dragon.reserved ? (
              <button
                className="cancel-reservation-button"
                onClick={() => dispatch(cancelDragonReservation(dragon.id))}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                className="reserve-dragon-button"
                onClick={() => dispatch(reserveDragon(dragon.id))}
              >
                Reserve Dragon
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragonsPage;
