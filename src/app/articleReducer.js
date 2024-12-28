import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: {},
};

const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        addArticles: (state, action) => {
            state.articles = action.payload
        } 
    }
})