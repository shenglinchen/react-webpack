import { ADD_TODO, FILTER } from "./actionType";
import { combineReducers } from "redux";
const initialState = {
  todos: [
    {
      text: "完成",
      completed: false
    }
  ]
};

const addTodos = (state = initialState.todos, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
};

const filter = (state = initialState.todos, action: any) => {
  switch (action.type) {
    case FILTER:
      return state.map((ele: any) => {
        if (ele.completed === action.completed) {
          return ele;
        }
      });
    default:
      return state;
  }
};

const todoApp = combineReducers({
  addTodos,
  filter
});

// 这个 combineReducers 做的和另一个 reducer.ts 中的做的一样

export default todoApp;
