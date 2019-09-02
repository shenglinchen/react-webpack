import { ADD_TODO, FILTER } from "./actionType";

const addTodo = (todo: any) => {
  return {
    type: ADD_TODO,
    todo,
    completed: false
  };
};

const filter = (completed: boolean) => {
  return {
    type: FILTER,
    completed
  };
};

export { addTodo, filter };
