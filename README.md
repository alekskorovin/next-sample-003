# treeshaking-demo

This is a repo demonstrating how to configure tree-shaking in a `tsup` project.

There are both a `Next.js` application and a `Vite` application to show how different bundlers handle tree-shaking.

To get started, run `pnpm i` at the root of the project. Next, link the `example-package` library into both applications by:

```
cd example-package
pnpm link ../next-project
pnpm link ../vite-project
```

Now you can run `pnpm build` or `pnpm build:single-entry` and see the results.
