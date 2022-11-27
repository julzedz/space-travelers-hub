import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profile.css';
import { selectAllRockets } from '../redux/rockets/rocketSlice';

const Profile = () => {
  const fetchedRockets = useSelector(selectAllRockets);
  const reservedRockets = fetchedRockets.filter((rocket) => rocket.reserved);
  return (
    <div>
      <div className="reserved-rockets">
        <h2>My Rockets</h2>
        <ul className="rocket-list">
          {reservedRockets.length !== 0 ? (
            reservedRockets.map((rocket) => (
              <li key={rocket.id} className="reserve-li">
                <span className="rocket-title">{rocket.name}</span>
              </li>
            ))
          ) : (
            <div className="no-missions">No Rocket Reserved</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
