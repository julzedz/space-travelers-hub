import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  reserveRocket, cancelRocket,
} from '../redux/rockets/rocketSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReservation = () => {
    if (rocket.reserved) {
      dispatch(cancelRocket(rocket.id));
    } else {
      dispatch(reserveRocket(rocket.id));
    }
  };

  return (
    <div className="rocket">
      <div className="rocket-image">
        <img src={rocket.image} alt={rocket.name} />
      </div>
      <div className="rocket-info">
        <h3>{rocket.name}</h3>
        <p>
          {rocket.reserved ? 'Reserved' : ''}
          {' '}
          {rocket.description}
        </p>
        <button type="button" onClick={handleReservation}>
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
