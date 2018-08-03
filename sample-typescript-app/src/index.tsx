import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {ReasonComponent} from "./ReasonComponent";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <App name={"Hello"} />
    <ReasonComponent message={"message from typescript"}/>
  </div>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
