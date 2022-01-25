import fs from "fs";
// The styles plugin unfortunately when taking
// scss imports can't seem to simply "emit" without error,

// And unfortunately, it cannot be simply built during the HTML step,
// since this mode with JS is more concerned with SCSS imports rather than inlining CSS

// This will just intercept the output and replace text in our built HTML file.
export const insert = () => {
  const insertText = (bundle) => {
    const output = `<style>${bundle.source}</style>`;
    const html = fs
      .readFileSync("build/index.html", { encoding: "utf-8" })
      .toString();
    const update = html.replaceAll(/<style[\s\S]*<\/style>/g, `${output}`);
    fs.writeFileSync("build/index.html", update, { encoding: "utf-8" });
  };

  return {
    name: "insert",
    generateBundle(_, bundle) {
      Object.keys(bundle)
        .map((file) => bundle[file])
        .filter((file) => file.type === "asset")
        .forEach((file) => insertText(file));
    },
  };
};
