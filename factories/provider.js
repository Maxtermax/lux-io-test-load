module.exports = class DataProviderFactory {
  create(adapter) {
    const isJsonPlaceholder = "JSON_PLACEHOLDER" === adapter;
    if (isJsonPlaceholder) {
      const jsonplaceholder = require("../adapters/jsonplaceholder.js");
      return new jsonplaceholder();
    }
  }
};
