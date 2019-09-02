import { createStore, applyMiddleware, compose } from "redux";
// import todoApp from "./reducer";
import todoApp from "./reducer1";

const store = createStore(
  todoApp,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
