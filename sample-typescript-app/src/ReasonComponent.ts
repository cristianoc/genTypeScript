// This file should be generated

// tslint:disable-next-line:no-var-requires
const ReasonComponentBs = require("./ReasonComponent.bs");

// tslint:disable-next-line:no-var-requires
const ReasonReact = require("reason-react/src/ReasonReact.js");

// tslint:disable-next-line:interface-name
export interface Props {
  message?: string;
  children?: any;
}

export const ReasonComponent: React.ComponentClass<Props> =
  ReasonReact.wrapReasonForJs(ReasonComponentBs.component, (jsProps: Props) => {
    return ReasonComponentBs.make(jsProps.message, jsProps.children);
});