import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { HeaderLink, QuestTab } from "../../database";
import { InterfaceReducer } from '../../types/state';

const initialState: InterfaceReducer = {
  questTab: QuestTab.all,
  headerLink: HeaderLink.quests,
};

const interfaceSlice = createSlice({
  name: NameSpace.Interface,
  initialState,
  reducers: {
    changeQuestTab: (state, action) => {
      state.questTab = action.payload;
    },
    changeHeaderLink: (state, action) => {
      state.headerLink = action.payload;
    },
  },
});

export const { changeQuestTab, changeHeaderLink } = interfaceSlice.actions;
export default interfaceSlice.reducer;
