import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { rocketReserve } from '../redux/rockets/rocketSlice';

const Rocket = (props) => {
  const { rocketelement } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <img src={rocketelement.flickr_images[0]} alt="" />
      </div>
      <div>
        <h2>{rocketelement.rocket_name}</h2>
        <div>
          <span>
            {rocketelement.reserved ? (
              <span className="badge">Reserved</span>
            ) : (
              ''
            )}
          </span>
          <p>{rocketelement.description}</p>
        </div>
        <input
          type="button"
          onClick={() => dispatch(rocketReserve(rocketelement.rocket_id))}
          value={rocketelement.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        />
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketelement: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
