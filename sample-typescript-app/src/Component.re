let component = ReasonReact.statelessComponent("Component");

let make = (~message="default message", _children) : ReasonReact.component(_) => {
  ...component,
  render: _self =>
    <div className="App">
      ("ReasonReact " ++ message |. ReasonReact.string)
    </div>,
};

[@bs.deriving abstract]
type jsProps = {message: string};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~message=jsProps |. messageGet, [||])
  );