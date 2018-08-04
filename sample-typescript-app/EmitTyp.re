open GenFlowCommon;

let any = Ident("any", []);
let genericsString = EmitFlow.genericsString;
let toString = EmitFlow.toString;
let commentBeforeRequire = "// tslint:disable-next-line:no-var-requires\n";

let emitExportType = (~opaque, ~typeName, ~typeParams, typ) =>
  "// tslint:disable-next-line:interface-name\n"
  ++ "export interface "
  ++ typeName
  ++ typeParams
  ++ " "
  ++ typ;