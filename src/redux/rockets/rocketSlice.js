import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Axios } from 'axios';

const initialState = {
  data: {},
  status: 'idle',
};

const fetchData = createAsyncThunk('RESERVE_ROCKETS', async () => {
  const getData = Axios.get('https://api.spacexdata.com/v3/rockets');
});

const rocketSlice = createSlice({
  name: 'GetrocketSlice',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default rocketSlice.reducer;
