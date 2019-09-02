import * as React from "react";
import "./index.less";
import { addTodo, filter } from "@/store/action";
import { connect } from "react-redux";
import store from "@/store/store";

class Index extends React.Component<any, any> {
  public addTodo = () => {
    this.props.addTodo({
      text: "ddd"
    });
    console.log(store.getState());
  };
  render() {
    return (
      <div className="index">
        index111
        <div styleName="dd" onClick={this.addTodo}>
          ddd
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (todo: { text: string }) => {
      dispatch(addTodo(todo));
    },
    filter: (conpleted: boolean) => {
      dispatch(filter(conpleted));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
