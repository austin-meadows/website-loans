import fs from "fs";

import { watch } from "rollup";

import config from "../rollup.config.js";

import rollupBuild from "./utils/rollup.js";

fs.rmSync("build", { force: true, recursive: true });
fs.mkdirSync("build", { recursive: true });

// TODO: Technically, even with skipWrite: true, work is already done
// That means the only work that should be done is additional modifications,
// but rollupBuild() basically runs everything again. I think. Maybe not.
config.forEach(async (cnf) => {
  const watchConf = { ...cnf, watch: { skipWrite: true } };
  const watcher = watch(watchConf);

  watcher.on("event", (event) => {
    if (event.result) {
      if (event.code === "BUNDLE_END") {
        rollupBuild(cnf, event.result);
      } else if (event.code === "ERROR") {
        console.log("Error in bundling");
      }

      event.result.close();
    }
  });

  watcher.close();
});
