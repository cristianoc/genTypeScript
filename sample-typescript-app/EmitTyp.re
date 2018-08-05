open GenFlowCommon;

let genericsString = genericStrings =>
  genericStrings === [] ?
    "" : "<" ++ String.concat(",", genericStrings) ++ ">";

let rec toString = (~exact, typ) =>
  switch (typ) {
  | Optional(typ) => "?" ++ (typ |> toString(~exact))
  | Ident(identPath, typeArguments) =>
    identPath ++ genericsString(List.map(toString(~exact), typeArguments))
  | ObjectType(fields) => fields |> renderObjType(~exact)
  | Arrow(typeParams, valParams, retType) =>
    renderFunType(~exact, typeParams, valParams, retType)
  }
and renderField = (~exact, (lbl, optness, typ)) => {
  let optMarker = optness === NonMandatory ? "?" : "";
  lbl ++ optMarker ++ ":" ++ (typ |> toString(~exact));
}
and renderObjType = (~exact, fields) =>
  (exact ? "{|" : "{")
  ++ String.concat(
       exact ? ", " : "; ",
       List.map(renderField(~exact), fields),
     )
  ++ (exact ? "|}" : "}")
/* TODO: Always drop the final unit argument. */
and renderFunType = (~exact, typeParams, valParams, retType) =>
  genericsString(List.map(toString(~exact), typeParams))
  ++ "("
  ++ String.concat(
       ", ",
       List.map(t => "_:" ++ (t |> toString(~exact)), valParams),
     )
  ++ ") => "
  ++ (retType |> toString(~exact));

let any = Ident("any", []);
let toString = (~config) => toString(~exact=config.language != "typescript");
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
  } else if (opaque) {
    "// tslint:disable-next-line:max-classes-per-file \n"
    ++ "export abstract class "
    ++ typeName
    ++ " { protected opaque:any }";
  } else {
    "// tslint:disable-next-line:interface-over-type-literal\n"
    ++ "export type "
    ++ typeName
    ++ typeParams
    ++ " = "
    ++ typ;
  };

let requireReact = (~config) => config.language != "typescript";

let reactComponentType = (~config) =>
  config.language != "typescript" ?
    "React$ComponentType" : "React.ComponentClass";

let fileHeader = (~config) =>
  config.language != "typescript" ?
    "/* @flow strict */\n" : "/* Typescript file generated */";

let componentExportName = (~config, ~moduleName) =>
  config.language != "typescript" ?
    "component" : ModuleName.toString(moduleName);

let outputFileSuffix = (~config) =>
  config.language != "typescript" ? ".re.js" : ".ts";

let generatedModuleExtension = (~config) =>
  config.language != "typescript" ? ".re" : "";

let importTypeAs = (~config, ~typeName, ~asTypeName, ~importPath) =>
  "import "
  ++ (config.language != "typescript" ? "type " : "")
  ++ "{"
  ++ typeName
  ++ (
    switch (asTypeName) {
    | Some(asT) => " as " ++ asT
    | None => ""
    }
  )
  ++ "} from '"
  ++ (importPath |> ImportPath.toString)
  ++ "'";

let blockTagValue = (~config, i) =>
  string_of_int(i) ++ (config.language != "typescript" ? "" : " as any");