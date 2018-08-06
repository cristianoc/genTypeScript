/* Typescript file generated */
// tslint:disable-next-line:no-var-requires
const CreateBucklescriptBlock = require("bs-platform/lib/js/block.js");
// tslint:disable-next-line:no-var-requires
const ReasonComponentBS = require("./ReasonComponent.bs");
// tslint:disable-next-line:no-var-requires
const ReasonReact = require("reason-react/src/ReasonReact.js");

// No need to import locally visible type t. Make sure it is also marked with @genFlow;

import {list} from '../src/shims/ReasonPervasives.shim';

import {t as Typest} from '../src/nested/Types';
// tslint:disable-next-line:interface-over-type-literal
export type Props = {message?:string; intList?:list<number>; children?:any};
export const ReasonComponent: React.ComponentClass<Props> = ReasonReact.wrapReasonForJs(
  ReasonComponentBS.component,
  (function _(jsProps: Props) {
     return ReasonComponentBS.make(jsProps.message, jsProps.intList, jsProps.children);
  }));
export const minus: (_1:{first?:number; second:number}) => number = function _(Arg1) { const result = ReasonComponentBS.minus(Arg1.first, Arg1.second); return result };
export const useTypeDefinedInAnotherModule: (_1:Typest) => Typest = ReasonComponentBS.useTypeDefinedInAnotherModule;
// tslint:disable-next-line:max-classes-per-file 
export abstract class TA { protected opaque:any } /* simulate opaque types */;
export const A: TA = 0 as any;
// tslint:disable-next-line:max-classes-per-file 
export abstract class TB { protected opaque:any } /* simulate opaque types */;
export const B: (_1:number) => TB = function _(Arg1) { return CreateBucklescriptBlock.__(0 as any, [Arg1]) }
// tslint:disable-next-line:max-classes-per-file 
export abstract class TC { protected opaque:any } /* simulate opaque types */;
export const C: (_1:string) => TC = function _(Arg1) { return CreateBucklescriptBlock.__(1 as any, [Arg1]) }
export type t =
  | TA
  | TB
  | TC;
export const tToString: (_1:t) => string = ReasonComponentBS.tToString;

