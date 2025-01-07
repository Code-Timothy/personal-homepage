import { all } from "redux-saga/effects";
import { watchFetchGithubProjects } from "./features/Projects/projectsSaga";

export default function* rootSaga() {
    yield all([
        watchFetchGithubProjects(),
    ]);
};