import { configureStore } from "@reduxjs/toolkit";
import { projectsReducer } from "./features/Projects/projectsSlice";
import { themeReducer } from "./features/Header/ThemeButton/themeSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;