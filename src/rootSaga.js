import { all } from "redux-saga/effects";
import { watchFetchGithubProjects } from "./features/PersonalHomepage/Projects/projectsSaga";

export default function* rootSaga() {
    yield all([
        watchFetchGithubProjects(),
    ]);
};