import { call, select, takeEvery } from "redux-saga/effects";
import { selectDarkTheme, toggleTheme } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* themeFromLocalStorageHandler() {
    const darkTheme = yield select(selectDarkTheme);
    yield call(saveThemeInLocalStorage, "theme", darkTheme);
};

export function* watchThemeInLocalStorage() {
    yield takeEvery(toggleTheme.type, themeFromLocalStorageHandler);
};