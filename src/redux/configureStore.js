import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketSlice from './rockets/rocketSlice';

const reducer = combineReducers({
  GetrocketSlice: rocketSlice,
});

const store = configureStore({ reducer });

export default store;
