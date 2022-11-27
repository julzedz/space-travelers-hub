import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  reserveRocket, cancelRocket,
} from '../redux/rockets/rocketSlice';
import '../styles/rocket.css';

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
        <img className="rocketimg" src={rocket.image} alt={rocket.name} />
      </div>
      <div className="rocket-info">
        <h3 className="title">{rocket.name}</h3>
        <p className="description">
          {rocket.reserved ? <span className="resv">Reserved</span> : ''}
          {' '}
          {rocket.description}
        </p>
        <button
          className={rocket.reserved ? 'not-resv' : 'resv-btn'}
          type="button"
          onClick={handleReservation}
        >
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
