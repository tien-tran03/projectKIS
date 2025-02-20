// @ts-ignore
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../../../types';

export const sessionStorageKeys: {
  [key: string]: string
} = {
  isLoggedIn: 'isLoggedIn',
  accessToken: 'accessToken',
  userId: 'userId',
  userName: 'userName',
};

const initialState: UserData = {
  isLoggedIn: sessionStorage.getItem(sessionStorageKeys.isLoggedIn) === 'true',
  accessToken: sessionStorage.getItem(sessionStorageKeys.accessToken) ?? '',
  userId: sessionStorage.getItem(sessionStorageKeys.userId) ?? '',
  userName: sessionStorage.getItem(sessionStorageKeys.userName) ?? '',
};

const name = 'userData';

const userDataSlice = createSlice({
  name,
  initialState,
  reducers: {
    setData(state: UserData, action: PayloadAction<Partial<UserData>>) {
      const newState = {
        ...state,
        ...action.payload
      };

      for (const key in newState) {
        if (!Object.prototype.hasOwnProperty.call(newState, key)) continue;
        if (!sessionStorageKeys[key]) continue;
        sessionStorage.setItem(key, (newState as any)[key] + '');
      }

      return newState;
    },
  }
});

export const {
  setData,
} = userDataSlice.actions;

export const withUserDataReducer = (reducers: any) => {
  reducers[name] = userDataSlice.reducer;
  return reducers;
};

export const selectUserData = (rootState: any): UserData => rootState[name];
