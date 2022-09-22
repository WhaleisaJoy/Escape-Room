import { NameSpace } from '../const';
import {combineReducers} from '@reduxjs/toolkit';
import dataReducer from './data-reducer/data-reducer';
import interfaceReducer from './interface-reducer/interface-reducer';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataReducer,
  [NameSpace.Interface]: interfaceReducer,
});
