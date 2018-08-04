// This file should be generated

// tslint:disable-next-line:no-var-requires
const ReasonComponentBS = require("./ReasonComponent.bs");

// tslint:disable-next-line:no-var-requires
const ReasonReact = require("reason-react/src/ReasonReact.js");

// tslint:disable-next-line:interface-name
export interface Props {
  message?: string;
  children?: any;
}

export const ReasonComponent: React.ComponentClass<Props> = ReasonReact.wrapReasonForJs(
  ReasonComponentBS.component,
  (function _(jsProps: Props) {
     return ReasonComponentBS.make(jsProps.message, jsProps.children);
  }));
