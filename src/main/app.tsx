import { hot } from "react-hot-loader/root";
import * as React from "react";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <div>app</div>;
  }
}

export default hot(App);
