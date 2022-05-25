import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cardSetup } from "../../features/postSetup";


export const loadPostsforCards = createAsyncThunk(
    'posts/loadPosts',
    async (query) => {
        const data = await cardSetup(query)
        return data;
    }
)

export const postListSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: null,
        isLoadingPosts: false,
        failedToLoadPosts: false
    },
    extraReducers: {
        ['posts/loadPosts/pending']: (state) => {
          state.isLoadingPosts = true;
          state.failedToLoadPosts = false;
        },
        ['posts/loadPosts/fulfilled']: (state, action) => {
          state.posts = action.payload;
          state.isLoadingPosts = false;
          state.failedToLoadPosts = false;
        },
        ['posts/loadPosts/failed']: (state) => {
          state.isLoadingPosts = false;
          state.failedToLoadPosts = true;
        }
      }
});

export const selectPosts = (state) => state.posts.posts;
export const isLoadingPosts = (state) => state.posts.isLoadingPosts;
export const createPostsIsPending = (state) => state.posts.createPostsIsPending;

export default postListSlice.reducer;