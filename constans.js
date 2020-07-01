module.exports = {
  PORT: 3000,
  BASE_URL: "https://jsonplaceholder.typicode.com/todos",
  INTERACTORS: {
    TodoInteractor: true,
  },
  DataProviderAdapter: "JSON_PLACEHOLDER",
  Exceptions: {
    SERVER_ERROR: {
      code: "SERVER_ERROR",
      message: "",
      details: {},
    },
  },
};
