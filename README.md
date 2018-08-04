# genTypescript

Explore what genFlow for typescript would look like.

There's a sample project `sample-typescript-app` created with:
```
create-react-app sample-typescript-app --scripts-version=react-scripts-ts
```

A ReasonReact component [ReasonComponent.re](sample-typescript-app/src/ReasonComponent.re) was added, and wrapper file [ReasonComponent.ts](sample-typescript-app/src/ReasonComponent.ts) can be generated automatically after patching up genFlow with [EmitTyp.re](sample-typescript-app/EmitTyp.re).
