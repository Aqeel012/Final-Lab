// slices/missionsSlice.jsx

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      return state.map((mission) =>
        mission.mission_id === missionId ? { ...mission, reserved: true } : mission
      );
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      return state.map((mission) =>
        mission.mission_id === missionId ? { ...mission, reserved: false } : mission
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
