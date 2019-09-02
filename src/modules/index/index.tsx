import * as React from "react";
import "./index.less";
import { addTodo, filter } from "@/store/action";
import store from "@/store/store";

store.dispatch(
  addTodo({
    text: "ddd",
    completed: false
  })
);

console.log(store.getState());

class Index extends React.Component<any, any> {
  render() {
    return (
      <div className="index">
        index111
        <div styleName="dd">ddd</div>
      </div>
    );
  }
}

export default Index;
