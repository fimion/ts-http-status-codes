import { defineBuildConfig } from "unbuild";

const config = defineBuildConfig({
  declaration: "compatible",
  clean: true,
  rollup: {
    esbuild: {
      minifyWhitespace: true,
    },
    dts: {
      respectExternal: false,
    },
  },
});

console.log(config);

export default config;
