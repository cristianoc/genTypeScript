let component = ReasonReact.statelessComponent("Component");

let make = (~message="default message", _children) : ReasonReact.component(_) => {
  ...component,
  render: _self => <div> (ReasonReact.string(message)) </div>,
};