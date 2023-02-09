import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: false,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
