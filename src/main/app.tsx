import { hot } from "react-hot-loader/root";
import * as React from "react";
import Index from "@/modules/index";

class App extends React.Component<any, any> {
  public showName = (name: string) => {
    return <div>{name}</div>;
  };

  public render() {
    return (
      <>
        {this.showName("App")}
        {this.showName(1)}
        <Index />
      </>
    );
  }
}

export default hot(App);
