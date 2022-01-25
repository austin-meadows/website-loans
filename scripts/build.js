import fs from "fs";

import { rollup } from "rollup";

import config from "../rollup.config.js";

import rollupBuild from "./utils/rollup.js";

fs.rmSync("build", { force: true, recursive: true });
fs.mkdirSync("build", { recursive: true });

config.forEach((cnf) => {
  rollup(cnf).then((bundle) => {
    rollupBuild(cnf, bundle);
  });
});
