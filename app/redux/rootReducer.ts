import {combineReducers} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {getPostsSlice} from './slices/getPostsSlice';

import store from './store';

export const rootReducer = combineReducers({
  posts: getPostsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
