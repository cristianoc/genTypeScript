import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { A, B, minus, ReasonComponent, tToString } from "./ReasonComponent";
import { t, TA, TB } from "./ReasonComponent";
import registerServiceWorker from "./registerServiceWorker";

const minusOne: number = minus({ second: 1 });

const a: TA = A;
const b: TB = B(3);
const thisIsOK: t = A;
// const thisIsATypeError: TB = A;

// tslint:disable-next-line:no-console
console.log(a, b, thisIsOK);

ReactDOM.render(
  <div>
    <App name={"Hello"} />
    <ReasonComponent
      message={"Message from typescript: minus one is " + minusOne + " and B(3) prints as " + tToString(b)}
    />
  </div>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
