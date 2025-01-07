import { configureStore } from "@reduxjs/toolkit";
import { projectsReducer } from "./features/Projects/projectsSlice";

const store = configureStore({
    reducer: {
        projects: projectsReducer,
    },
});

export default store;