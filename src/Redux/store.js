import { createStore, applyMiddleware } from "redux";
import createDebounce from 'redux-debounced';
import Reducer from "./reducers.js";

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const createStoreWithMiddleware = applyMiddleware(
    createDebounce()
)(createStore);

const store = createStoreWithMiddleware(Reducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
