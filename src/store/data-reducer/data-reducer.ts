import { createSlice } from '@reduxjs/toolkit';
import { DefaultQuest, NameSpace } from '../../const';
import { DataReducer } from '../../types/state';

const initialState: DataReducer = {
  quests: [],
  currentQuest: DefaultQuest,
  isDataLoaded: false,
  isCurrentOfferDataLoaded: false,
};

const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadQuests: (state, action) => {
      state.quests = action.payload;
      state.isDataLoaded = true;
    },
    loadCurrentQuest: (state, action) => {
      state.currentQuest = action.payload;
      state.isCurrentOfferDataLoaded = true;
    },
    dropCurrentQuest: (state) => {
      state.currentQuest = DefaultQuest;
      state.isCurrentOfferDataLoaded = false;
    },
  },
});

export const { loadQuests, loadCurrentQuest, dropCurrentQuest } = dataSlice.actions;
export default dataSlice.reducer;
