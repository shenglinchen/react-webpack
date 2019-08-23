// import { hot } from "react-hot-loader";
import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <div>app</div>;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
