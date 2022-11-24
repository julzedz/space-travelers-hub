import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Axios } from 'axios';

const initialState = {
  data: {},
  status: 'idle',
};

const fetchData = createAsyncThunk('RESERVE_ROCKETS', async () => {
  const getData = Axios.get('https://api.spacexdata.com/v3/rockets');
  const rocketList = await getData.json();
  return rocketList;
});

const rocketSlice = createSlice({
  name: 'GetrocketSlice',
  initialState,
  reducers: {
    rocketReserve: (state, action) => state.map((rocket) => {
      if (rocket.rocket_id === action.payload) {
        return { ...rocket, reserved: !rocket.reserved };
      }
      return rocket;
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = rocketSlice;
const { rocketReserve } = actions;
export { actions, fetchData, rocketReserve };
export default reducer;
