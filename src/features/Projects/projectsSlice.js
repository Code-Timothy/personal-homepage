import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchProjectsRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProjectsSuccess: (state, action) => {
            state.projects = action.payload;
            state.loading = false;
        },
        fetchProjectsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchProjectsRequest, fetchProjectsSuccess, fetchProjectsFailure } = projectsSlice.actions;
export default projectsSlice.reducer;