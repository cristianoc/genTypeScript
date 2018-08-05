/* Typescript file generated */
// tslint:disable-next-line:no-var-requires
const ReasonComponentBS = require("./ReasonComponent.bs");
// tslint:disable-next-line:no-var-requires
const ReasonReact = require("reason-react/src/ReasonReact.js");

import {t as Typest} from '../src/nested/Types';
// tslint:disable-next-line:interface-over-type-literal
export type Props = {message?:string; children?:any};
export const ReasonComponent: React.ComponentClass<Props> = ReasonReact.wrapReasonForJs(
  ReasonComponentBS.component,
  (function _(jsProps: Props) {
     return ReasonComponentBS.make(jsProps.message, jsProps.children);
  }));
export const minus: (_:{first?:number; second:number}) => number = function _(Arg1) { const result = ReasonComponentBS.minus(Arg1.first, Arg1.second); return result };
export const useTypeDefinedInAnotherModule: (_:Typest) => Typest = ReasonComponentBS.useTypeDefinedInAnotherModule;

