/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import {
  selectAllRockets, fetchRockets,
} from '../redux/rockets/rocketSlice';

let didInitialRender = false;
const Rockets = () => {
  const rockets = useSelector(selectAllRockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!didInitialRender) {
      dispatch(fetchRockets());
      didInitialRender = true;
    }
  }, []);

  return (
    <div className="rockets">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default Rockets;
