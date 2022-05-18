import { configureStore } from "@reduxjs/toolkit";
import postListReducer from '../components/postList/postListSlice';
import searchSlice from "../components/search/searchSlice";

export default configureStore({
    reducer:{
        query: searchSlice,
        posts: postListReducer
    }
});
