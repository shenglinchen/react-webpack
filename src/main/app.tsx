import { hot } from "react-hot-loader/root";
import * as React from "react";
import Index from "@/modules";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <Index />;
  }
}

export default hot(App);
