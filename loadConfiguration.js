const {
  Exceptions,
  DataProviderAdapter,
  PORT,
  BASE_URL,
  INTERACTORS,
} = require("./constans.js");

module.exports = () => {
  global.INTERACTORS = INTERACTORS;
  global.PORT = PORT;
  global.BASE_URL = BASE_URL;
  global.Exceptions = Exceptions;
  global.DataProviderFactory = require("./factories/provider.js");
  global.surePromise = require("./utils/surePromise.js");
  global.mapExceptionsToStatusCode = require("./utils/mapExceptionsToStatusCode.js");
  const dataProvider = new DataProviderFactory();
  global.DataSource = dataProvider.create(DataProviderAdapter);
};
