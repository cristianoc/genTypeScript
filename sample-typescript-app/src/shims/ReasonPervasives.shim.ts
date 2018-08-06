// tslint:disable-next-line:no-var-requires
const $$Array = require("bs-platform/lib/js/array");

// tslint:disable-next-line:max-classes-per-file
export abstract class EmptyList {
  protected opaque: any;
}

// tslint:disable-next-line:max-classes-per-file
export abstract class Cons<t> {
  protected opaque: t;
}

export type list<t> = Cons<t> | EmptyList;

export function cons(itm: any, lst: any) {
  return /* :: */ [itm, lst];
}

export const emptyList = /* [] */ 0;

export const fromArray = $$Array.to_list;
