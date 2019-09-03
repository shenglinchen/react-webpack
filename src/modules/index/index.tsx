import * as React from "react";
import "./index.less";
import { addTodo, filter } from "@/store/action";
import { connect } from "react-redux";
import store from "@/store/store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};
const About = (props: any) => {
  return <div>About</div>;
};

const Users = (props: any) => {
  return <div>Users</div>;
};

const Carnitas = () => {
  return <div>Carnitas</div>;
};

const Tacos = (props: any) => {
  const { match } = props;
  console.log(match);
  return (
    <div>
      Tocos
      <Route path={match.url + "/carnitas"} component={Carnitas} />
    </div>
  );
};

class Index extends React.Component<any, any> {
  public addTodo = () => {
    this.props.addTodo({
      text: "ddd"
    });
    console.log(store.getState());
  };
  render() {
    return (
      <Router>
        <div className="index">
          index111
          <div styleName="dd" onClick={this.addTodo}>
            ddd
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/tacos/">Tacos</Link>
            </li>
            <li>
              <Link to="/tacos/carnitas/">Tacos</Link>
            </li>
          </ul>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/tacos" component={Tacos} />
      </Router>
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
