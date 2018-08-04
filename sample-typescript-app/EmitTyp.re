open GenFlowCommon;

let any = Ident("any", []);
let genericsString = EmitFlow.genericsString;
let toString = (~config) =>
  EmitFlow.toString(~exact=config.language != "typescript");
let commentBeforeRequire = (~config) =>
  config.language != "typescript" ?
    "" : "// tslint:disable-next-line:no-var-requires\n";

let emitExportType = (~config, ~opaque, ~typeName, ~typeParams, typ) =>
  if (config.language != "typescript") {
    "export"
    ++ (opaque ? " opaque " : " ")
    ++ "type "
    ++ typeName
    ++ typeParams
    ++ " = "
    ++ typ
    ++ (opaque ? " // Reason type already checked. Making it opaque" : "");
  } else {
    "// tslint:disable-next-line:interface-name\n"
    ++ "export interface "
    ++ typeName
    ++ typeParams
    ++ " "
    ++ typ;
  };

let requireReact = (~config) => config.language != "typescript";

let reactComponentType = (~config) =>
  config.language != "typescript" ?
    "React$ComponentType" : "React.ComponentClass";

let fileHeader = (~config) =>
  config.language != "typescript" ?
    "/* @flow strict */\n" : "/* Typescript file generated */";