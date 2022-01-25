import { Blob } from "buffer";
import fs from "fs";

const { version } = JSON.parse(
  fs.readFileSync("package.json", { encoding: "utf-8" })
);
let saveInlineCSS = "";
const rollupBuild = (config, bundle) => {
  const result = [];

  bundle
    .generate(config.output)
    .then(({ output }) => {
      output.forEach((compiled) => {
        const filename = `${config.output.dir}/${compiled.fileName}`;
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

          modContent = modContent.replace(
            /<style[\s\S]*<\/style>/g,
            `<style>${saveInlineCSS}</style>`
          );
        }

        if (filename.includes(".css")) {
          saveInlineCSS = content;
          const htmlPath = `build/index.html`;
          if (fs.existsSync(htmlPath)) {
            const html = fs.readFileSync(htmlPath, { encoding: "utf-8" });
            const newHtml = html.replace(
              /<style[\s\S]*<\/style>/g,
              `<style>${saveInlineCSS}</style>`
            );
            fs.writeFileSync(htmlPath, newHtml);
            console.log("Wrote file:", htmlPath, new Blob([newHtml]).size);
          }
        }

        if (!filename.includes("temp")) {
          fs.writeFile(filename, modContent, () => {
            console.log("Wrote file:", filename, new Blob([modContent]).size);
          });
        }
      });
    });
};

export default rollupBuild;
