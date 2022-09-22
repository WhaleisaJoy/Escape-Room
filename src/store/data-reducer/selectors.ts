import { NameSpace } from '../../const';
import { Quest } from '../../types/quest';
import { State } from '../../types/state';

export const getQuests = (state: State): Quest[] => state[NameSpace.Data].quests;

export const getCurrentQuest = (state: State): Quest => state[NameSpace.Data].currentQuest;

export const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const getCurrentOfferDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isCurrentOfferDataLoaded;
