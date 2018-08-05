# genTypescript

This is a companion repository to [genFlow](https://github.com/cristianoc/genFlow), to explore
type-safe bindings between [Reason](https://reasonml.github.io/) and [Typescript](https://www.typescriptlang.org/).

There's a sample project [sample-typescript-app](sample-typescript-app) created with:
```
create-react-app sample-typescript-app --scripts-version=react-scripts-ts
```

The project was extended by adding a ReasonReact component [ReasonComponent.re](sample-typescript-app/src/ReasonComponent.re). The typed wrapper [ReasonComponent.ts](sample-typescript-app/src/ReasonComponent.ts) is generated automatically by genFlow. The wrapper is used by [index.tsx](sample-typescript-app/src/index.tsx).


## Building

Currently, building requires patching up genFlow with [EmitTyp.re](sample-typescript-app/EmitTyp.re) and follow the normal genFlow build and setup instructions.

The linter needs to be taught to ignore `.bs.js` files, see [tslint.json](sample-typescript-app/tslint.json).
