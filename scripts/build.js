import { Blob } from "buffer";
import fs from "fs";

import { rollup } from "rollup";

import config from "../rollup.config.js";

const { version } = JSON.parse(
  fs.readFileSync("package.json", { encoding: "utf-8" })
);
fs.rmSync("build", { force: true, recursive: true });
fs.mkdirSync("build", { recursive: true });

const result = [];
config.forEach((cnf) => {
  rollup(cnf).then((bundle) => {
    bundle
      .generate(cnf.output)
      .then(({ output }) => {
        output.forEach((compiled) => {
          const filename = `${cnf.output.dir}/${compiled.fileName}`;
          const content = compiled.code || compiled.source;
          result.push({ content, filename });
        });
      })
      .then(() => bundle.close())
      .then(() => {
        result.forEach(({ content, filename }) => {
          let modContent = content;

          if (filename.includes(".html")) {
            modContent = content.replace(/{{version}}/g, version);

            const { content: cssContent } = result.find(({ filename }) =>
              filename.includes(".css")
            );
            modContent = modContent.replace(
              /<style[\s\S]*<\/style>/g,
              cssContent
            );
          }

          if (!filename.includes("temp")) {
            fs.writeFile(filename, modContent, () => {
              console.log("Wrote file:", filename, new Blob([modContent]).size);
            });
          }
        });
      });
  });
});
