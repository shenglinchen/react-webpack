import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

// import todoApp from "./reducer";
import todoApp from "./reducer1";

const store = createStore(todoApp, applyMiddleware(thunkMiddleware));
export default store;
