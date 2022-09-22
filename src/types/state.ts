import { store } from "../store";
import { Quest } from "./quest";

export type DataReducer = {
  quests: Quest[],
  currentQuest: Quest,
  isDataLoaded: boolean,
  isCurrentOfferDataLoaded: boolean,
};

export type InterfaceReducer = {
  questTab: string,
  headerLink: string,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
