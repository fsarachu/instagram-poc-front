import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules";
import rootSaga from "./modules/sagas";

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(sagaMiddleware)
);

const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga);

export default store;