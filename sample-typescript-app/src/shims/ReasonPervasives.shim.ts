
const $$Array = require('bs-platform/lib/js/array');

export abstract class EmptyList { protected opaque:any };

export abstract class Cons<t> { protected opaque:any };

export type list<t> = | Cons<t> | EmptyList;

export function cons(itm:any, lst:any) {
  return /* :: */[
          itm,
          lst
        ];
}

export const emptyList = /* [] */0;

export const fromArray = $$Array.to_list;
