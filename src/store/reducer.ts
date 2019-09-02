import { ADD_TODO, FILTER } from "./actionType";
const initialState = {
  todos: [
    {
      text: "完成",
      completed: false
    }
  ]
};

const addTodos = (state: any[], action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
};

const filter = (state: any[], action: any) => {
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

const todoApp = (state = initialState, action: any) => {
  return {
    todos: addTodos(state.todos, action),
    filterResult: filter(state.todos, action)
  };
};

export default todoApp;
