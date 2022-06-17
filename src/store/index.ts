import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import themeReducer from './reducers/theme';

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
