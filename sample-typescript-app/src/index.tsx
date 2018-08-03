import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import {Component} from "./Component";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <App name={"Hello"} />
    <Component message={"message from typescript"}/>
  </div>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
