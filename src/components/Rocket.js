import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, rocketReserve } from '../redux/rockets/rocketSlice';

const Rocket = () => {
  const fetchRockets = useSelector((state) => state.GetrocketSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleJoin = (rocketId) => {
    dispatch(rocketReserve(rocketId));
  };

  return (
    <div>
      {fetchRockets.data.map((rocket) => (
        <div key={rocket.rocket_id}>
          <div>
            <img src={fetchRockets.rocket.flickr_images} alt="" />
          </div>
          <div>
            <h2>{fetchRockets.rocket.rocket_name}</h2>
            <div>
              <span>
                {fetchRockets.reserved ? (
                  <span className="badge">Reserved</span>
                ) : (
                  ''
                )}
              </span>
              <p>{fetchRockets.rocket.description}</p>
            </div>
            <input
              type="button"
              onClick={() => handleJoin(rocketReserve(fetchRockets.rocket_id))}
              value={
                fetchRockets.reserved ? 'Cancel Reservation' : 'Reserve Rocket'
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rocket;
