import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {ReasonComponent} from "./ReasonComponent";
import {minus} from "./ReasonComponent";
import registerServiceWorker from "./registerServiceWorker";

const minusOne :number = minus({second:1});

ReactDOM.render(
  <div>
    <App name={"Hello"} />
    <ReasonComponent message={"Message from typescript: minus one is " + minusOne }/>
  </div>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
