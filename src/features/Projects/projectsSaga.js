import { put, call, takeLatest } from "redux-saga/effects";
import { fetchProjectsFailure, fetchProjectsRequest, fetchProjectsSuccess } from "./projectsSlice";
import { fetchGithubProjects } from "./fetchGithubProjects";

function* fetchGithubProjectsHandler() {
    try {
        const projects = yield call(fetchGithubProjects);
        yield put(fetchProjectsSuccess(projects));
    } catch (error) {
        yield put(fetchProjectsFailure());
    }
};

export function* watchFetchGithubProjects() {
    yield takeLatest(fetchProjectsRequest.type, fetchGithubProjectsHandler);
};