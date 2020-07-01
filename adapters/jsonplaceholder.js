const fetch = require("node-fetch");

const JsonPlaceholderWrapper = {
  async getTodo(id) {
    return fetch(`${BASE_URL}/${id}`).then((response) => response.json());
  },
};

module.exports = class JsonPlaceholderAdapter {
  connect() {
    return Promise.resolve(JsonPlaceholderWrapper);
  }
};
