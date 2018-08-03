import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

// tslint:disable-next-line:interface-name
export interface Props {
  name: string;
  count?: number;
}

class App extends React.PureComponent<Props> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Props name:{this.props.name} count:{this.props.count ||
            "undefined"}.
        </p>
      </div>
    );
  }
}

export default App;
