// This file should be generated

// tslint:disable-next-line:no-var-requires
const ComponentBs = require("./Component.bs");

// tslint:disable-next-line:no-var-requires
const ReasonReact = require("reason-react/src/ReasonReact.js");

// tslint:disable-next-line:interface-name
export interface Props {
  message?: string;
  children?: any;
}

export const Component: React.ComponentClass<Props> =
  ReasonReact.wrapReasonForJs(ComponentBs.component, (jsProps: Props) => {
    return ComponentBs.make(jsProps.message, jsProps.children);
});
