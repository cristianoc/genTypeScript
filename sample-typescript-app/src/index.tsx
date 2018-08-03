import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import * as ComponentRe from "./Component.bs";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const Component = ComponentRe.jsComponent;

ReactDOM.render(
  <div>
    <App name={"Hello"} />
    <Component message={"message from typescript"}/>
  </div>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
