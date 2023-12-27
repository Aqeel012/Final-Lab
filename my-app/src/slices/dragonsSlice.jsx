// slices/dragonsSlice.jsx

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/dragons');
  return response.data;
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    reserveDragon: (state, action) => {
      const dragonId = action.payload;
      return state.map((dragon) =>
        dragon.id === dragonId ? { ...dragon, reserved: true } : dragon
      );
    },
    cancelDragonReservation: (state, action) => {
      const dragonId = action.payload;
      return state.map((dragon) =>
        dragon.id === dragonId ? { ...dragon, reserved: false } : dragon
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { reserveDragon, cancelDragonReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
