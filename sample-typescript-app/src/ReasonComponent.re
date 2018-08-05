let component = ReasonReact.statelessComponent("Component");

[@genFlow]
let make = (~message="default message", _children) : ReasonReact.component(_) => {
  ...component,
  render: _self =>
    <div className="App">
      ("ReasonReact " ++ message |. ReasonReact.string)
    </div>,
};

[@genFlow]
let minus = (~first=0, ~second) => first - second;