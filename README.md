# genTypescript

This is a companion repository to [genFlow](https://github.com/cristianoc/genFlow), to explore
type-safe bindings between [Reason](https://reasonml.github.io/) and [Typescript](https://www.typescriptlang.org/).




## Building genFlow

Follow the instructions to build [genFlow](https://github.com/cristianoc/genFlow) and keep note of the `__path/__to/GenFlow.exe`.


## Sample project [sample-typescript-app](sample-typescript-app)

#### Try the project:

```
# in sample-typescript-app
export BS_CMT_POST_PROCESS_CMD="__path/__to/GenFlow.exe --setProjectRoot $PWD"
yarn build
yarn start
```

#### For vscode users:
Configure the extension [OCaml and Reason IDE](https://marketplace.visualstudio.com/items?itemName=freebroccolo.reasonml) to start `bsb` from the editor itself:
```
"reason.diagnostics.tools": ["merlin", "bsb"],
```
and start vscode **after** setting environment variable `BS_CMT_POST_PROCESS_CMD`:

```
# in sample-typescript-app
export BS_CMT_POST_PROCESS_CMD="__path/__to/GenFlow.exe --setProjectRoot $PWD"
code .
```

#### Set up

Originally based off the template:
```
create-react-app sample-typescript-app --scripts-version=react-scripts-ts
```


The project was extended by adding a ReasonReact component [ReasonComponent.re](sample-typescript-app/src/ReasonComponent.re). The typed wrapper [ReasonComponent.ts](sample-typescript-app/src/ReasonComponent.ts) is generated automatically by genFlow. The wrapper is used by [index.tsx](sample-typescript-app/src/index.tsx).

Configuration files [bsconfig.json](sample-typescript-app/bsconfig.json), and [genflowconfig.json](sample-typescript-app/genflowconfig.json) were added.
The [shims](sample-typescript-app/src/shims) directory was added.

The linter was taught to ignore `.bs.js` files, see [tslint.json](sample-typescript-app/tslint.json).
