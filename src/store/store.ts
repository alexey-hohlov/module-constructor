import { combineReducers, configureStore } from '@reduxjs/toolkit';

import moduleReducer from './reducers/moduleReducer';
import uiReducer from './reducers/uiReducer';
import localStorageMiddleware from './middleware/localStorageMiddleware';

const rootReducer = combineReducers({
  moduleReducer,
  uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
