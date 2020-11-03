"use strict";

require("@babel/core").transform("<div>\n<div class=\"dash-box\">\n  <img src=\"https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1\" />\n</div>\n\n<div class=\"solid-box\">\n  <img src=\"https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1\" />\n</div>\n\n<div class=\"solid-box\">\n  <div class=\"dash-box\">\n    <img src=\"https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1\" />\n  </div>\n  <img src=\"https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1\" />\n</div>\n</div>", {
  plugins: ["@babel/plugin-transform-react-jsx"]
});