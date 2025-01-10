import { all } from "redux-saga/effects";
import { watchFetchGithubProjects } from "./features/PersonalHomepage/Projects/projectsSaga";
import { watchThemeInLocalStorage } from "./features/PersonalHomepage/ThemeButton/themeSaga";

export default function* rootSaga() {
    yield all([
        watchFetchGithubProjects(),
        watchThemeInLocalStorage(),
    ]);
};