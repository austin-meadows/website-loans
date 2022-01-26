import fs from "fs";

import autoprefixer from "autoprefixer";
import { minify } from "html-minifier";
import postcss from "postcss";
import csso from "postcss-csso";
import sass from "sass";

const template = async ({ title }) => {
  const { version } = JSON.parse(
    fs.readFileSync("package.json", { encoding: "utf-8" })
  );
  const { css } = sass.compile("src/index.scss");
  const { css: processed } = await postcss([
    csso({ removeComments: true }),
    autoprefixer(),
  ]).process(css, { from: undefined });
  return minify(
    `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <base href="/" />
    <!---------- Preconnects ---------->
    <link
      href="https://cdnjs.cloudflare.com"
      rel="preconnect"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.gstatic.com"
      rel="preconnect"
      crossorigin="anonymous"
    />

    <!---------- Preload ---------->
    <link
      rel="preload"
      href="/app-${version}.js"
      as="script"
      crossorigin="anonymous"
      referrerpolicy="same-origin"
    />
    <link
      rel="preload"
      href="/lit-${version}.js"
      as="script"
      crossorigin="anonymous"
      referrerpolicy="same-origin"
    />
    <link
      rel="preload"
      href="/router-${version}.js"
      as="script"
      crossorigin="anonymous"
      referrerpolicy="same-origin"
    />

    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/reseter.css/2.0.0/minireseter.min.css"
      as="style"
      integrity="sha512-26lCJWeu4qh1Kd3YpqH03s+Ju7qI9mqz48E8mPE/qIoucLUbkBx6oayTM+0T3mAdC1DdT1grtnFtJNwsB+8qzw=="
      crossorigin="anonymous"
      rel="preload"
    />
    <link
      href="https://fonts.gstatic.com/s/cabin/v18/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EH7alxw.woff2"
      as="font"
      crossorigin="anonymous"
      rel="preload"
      type="font/woff2"
    />

    <!---------- Assets ---------->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/reseter.css/2.0.0/minireseter.min.css"
      rel="stylesheet"
      integrity="sha512-26lCJWeu4qh1Kd3YpqH03s+Ju7qI9mqz48E8mPE/qIoucLUbkBx6oayTM+0T3mAdC1DdT1grtnFtJNwsB+8qzw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <script type="application/javascript">
      var preloadLink = document.createElement("link");
      var preloadMap = {
        "/": "Home-${version}.js",
        "/sign-in": "SignIn-${version}.js",
        "/storyboard": "Storyboard-${version}.js"
      };
      preloadLink.href = preloadMap[window.location.pathname.toLowerCase()];
      preloadLink.rel = "preload";
      preloadLink.as = "script";
      preloadLink.setAttribute("crossorigin", "anonymous");
      document.head.appendChild(preloadLink);
    </script>
    <style>${processed}</style>
  </head>
  <body>
    <s-app></s-app>
    <script src="/app-${version}.js" type="module" async crossorigin="anonymous" referrerpolicy="same-origin"></script>
  </body>
</html>
`,
    {
      collapseWhitespace: true,
      minifyJS: true,
      removeAttributeQuotes: true,
      removeComments: true,
      sortAttributes: true,
      sortClassName: true,
    }
  );
};

export default template;
