import { createStore } from "redux";
import rootReducer from "./stores/reducers/rootReducer";

const store = createStore(
    rootReducer,
    {},

);

export default store;