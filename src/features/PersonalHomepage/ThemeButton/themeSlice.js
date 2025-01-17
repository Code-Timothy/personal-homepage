import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkTheme: getThemeFromLocalStorage("theme") || false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeState = (state) => state.theme;
export const selectDarkTheme = (state) => selectThemeState(state).darkTheme;

export const themeReducer = themeSlice.reducer;