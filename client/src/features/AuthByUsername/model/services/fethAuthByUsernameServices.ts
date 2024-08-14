import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User } from 'entities/User/model/types/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localsorage';
import {
  getAuthPassword,
  getAuthUsername,
} from '../selectors/AuthByUsernameSelectors';
import { UserActions } from 'entities/User/model/slice/UserSlice';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const fetchAuthByUsernameServices = createAsyncThunk<
  User,
  void,
  ThunkConfig<string>
>('authByUsername', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi;

  const username = getAuthUsername(getState());
  const password = getAuthPassword(getState());
  try {
    const respons = await extra.api.post<User>(`/auth/login`, {
      username,
      password,
    });
    if (!respons.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(respons.data));
    dispatch(UserActions.setAuthData(respons.data));
    console.log(respons.data);
    return respons.data;
  } catch (err) {
    return rejectWithValue(`ERORRRR`);
  }
});
