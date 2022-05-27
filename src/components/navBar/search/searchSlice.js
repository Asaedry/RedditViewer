import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: '/hot',
    },
    reducers: {
        setQuery: (state, action) => {
            state.search = action.payload;
        }
    }

});

export const selectSearch = (state) => state.query.search;
export const isLoadingQuery = (state) => state.posts.isLoadingQuery;
export const createQueryIsPending = (state) => state.posts.createQueryIsPending;

export const {setQuery} = searchSlice.actions;

export default searchSlice.reducer;

