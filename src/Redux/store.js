import { createStore } from "redux";

import Reducer from "./reducers.js";

const store = createStore(Reducer);

export default store;
