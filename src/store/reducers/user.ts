import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types';

const initialState: TUser = {
  address: '',
  userName: '',
  age: 18,
};

const walletSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.userName = action.payload;
    },
  },
});

export const { setUserInfo } = walletSlice.actions;

export default walletSlice.reducer;
