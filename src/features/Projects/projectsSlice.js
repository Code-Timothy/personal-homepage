import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        loading: false,
        error: false,
    },
    reducers: {
        fetchProjectsRequest: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchProjectsSuccess: (state, action) => {
            state.projects = action.payload;
            state.loading = false;
        },
        fetchProjectsFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const { fetchProjectsRequest, fetchProjectsSuccess, fetchProjectsFailure } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;