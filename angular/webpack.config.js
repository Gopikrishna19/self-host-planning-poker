const glob = require('glob');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

module.exports = {
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync('./src/**/*.html', { nodir: true }),
      safelist: {
        deep: [
          /offcanvas-/,
          /tooltip-/,
          /tooltip/,
          /modal/,
          /modal-/,
          /toast-/,
          /toast/,
          /show/,
          /fade/,
          /end-/,
          /position-/,
          /p-/,
          /d-/,
          /top-/,
          /bg-/,
          /text-/
        ]
      }
    })
  ]
};
