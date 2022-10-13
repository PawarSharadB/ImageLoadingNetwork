import {createSlice} from '@reduxjs/toolkit';

export const getPostsSlice = createSlice({
  name: 'posts',
  initialState: {
    photos: [],
    loading: false,
  },
  reducers: {
    getPosts(state) {
      state.loading = true;
    },
    setPosts: (state, action) => {
      const {photos} = action.payload;
      state.photos = photos;
      state.loading = false;
    },
  },
});

export const {getPosts, setPosts} = getPostsSlice.actions;
