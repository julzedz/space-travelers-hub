import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rocket: [],
};

const URL = 'https://api.spacexdata.com/v3/rockets';
export const fetchData = createAsyncThunk(
  'RESERVE_ROCKETS', async () => {
    const getData = await axios.get(URL);
    console.log(getData.data);
    return getData.data;
  },
);

const rocketSlice = createSlice({
  name: 'GetrocketSlice',
  initialState,
  reducers: {
    rocketReserve: (state, action) => ({
      ...state,
      rocket: state.rocket.map((thisRocket) => {
        if (thisRocket.rocket_id === action.payload) {
          return {
            ...thisRocket,
            reserved: !thisRocket.reserved,
          };
        }
        return thisRocket;
      }),
    }),
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.rocket = action.payload.map((rock) => ({
        ...state.rocket,
        rocket_id: rock.rocket_id,
        rocket_name: rock.rocket_name,
        description: rock.description,
        flickr_images: rock.flickr_images,
        reserved: false,
      }));
    },
  },
});

const { actions, reducer } = rocketSlice;
const { rocketReserve } = actions;
export { actions, rocketReserve };
export default reducer;
