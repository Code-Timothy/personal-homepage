import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        loading: true,
        error: false,
    },
    reducers: {
        fetchProjectsRequest: () => { },
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

export const selectProjectsState = (state) => state.projects;
export const selectLoading = state => selectProjectsState(state).loading;
export const selectError = state => selectProjectsState(state).error;
export const selectProjects = (state) => selectProjectsState(state).projects;