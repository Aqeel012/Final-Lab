// store/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer, { fetchDragons } from '../slices/dragonsSlice';
import missionsReducer, { fetchMissions } from '../slices/missionsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: missionsReducer,
  },
});

// Fetch initial data on application load
store.dispatch(fetchDragons());
store.dispatch(fetchMissions());

export default store;
