import { createStore } from "redux";
import reducer from "./reducers.js";

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

const store = createStore(reducer, loadFromLocalStorage());

store.subscribe(() => {
    saveToLocalStorage({
        savedTournaments: store.getState().savedTournaments
    })
});

export default store;
