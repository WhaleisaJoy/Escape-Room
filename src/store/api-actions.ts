import { AxiosInstance } from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { APIRoute, AppRoute } from '../const';
import { toast } from 'react-toastify';
import { errorHandle } from '../services/error-handle';
import { loadQuests, loadCurrentQuest } from './data-reducer/data-reducer';
import { Quest } from '../types/quest';
import { AppDispatch, State } from '../types/state';
import { BookingOrder } from '../types/types';
import { redirectToRoute } from './action';

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Quest[]>(APIRoute.Quests);
      dispatch(loadQuests(data));
    } catch (error) {
      errorHandle(error);
    }
  }
);

export const fetchCurrentQuestAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCurrentQuest',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
      dispatch(loadCurrentQuest(data));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const postBookingOrderAction = createAsyncThunk<void, BookingOrder, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postBookingOrder',
  async (data, {extra: api}) => {
    try {
      await api.post<BookingOrder>(APIRoute.Orders, data);
      toast.success('Заявка успешно оформлена');
    } catch (error) {
      errorHandle(error);
    }
  }
);
