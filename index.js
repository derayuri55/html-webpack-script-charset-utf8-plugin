class HtmlWebpackScriptCharsetUtf8Plugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(
      "HtmlWebpackScriptCharsetUtf8Plugin",
      compilation => {
        compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
          "myPlugin",
          (data, cb) => {
            if (data.head.length) {
              data.head.forEach(tag => {
                if (tag.attributes.rel === "stylesheet") {
                  tag.attributes.charset = "utf-8";
                }
              });
            }
            if (data.body.length) {
              data.body.forEach(tag => {
                if (tag.tagName === "script") {
                  tag.attributes.charset = "utf-8";
                }
              });
            }
            cb(null, data);
          }
        );
      }
    );
  }
}

module.exports = HtmlWebpackScriptCharsetUtf8Plugin;
