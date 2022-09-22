import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCurrentQuestTab = (state: State): string => state[NameSpace.Interface].questTab;

export const getCurrentHeaderLink = (state: State): string => state[NameSpace.Interface].headerLink;
