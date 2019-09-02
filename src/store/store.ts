import { createStore } from "redux";
// import todoApp from "./reducer";
import todoApp from "./reducer1";

let store = createStore(todoApp);

export default store;
