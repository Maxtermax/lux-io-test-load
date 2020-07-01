const app = require("./app/app.js");
const interactors = require("./factories/interactors");

const bootstrap = async () => {
  const { ok, error: connectException, result: connection } = await surePromise(
    DataSource.connect()
  );
  if (ok) {
    const dataInteractors = interactors(connection);
    Object.keys(dataInteractors).forEach(
      (key) => (global[key] = dataInteractors[key])
    );
    app.listen(PORT, () => console.log(`Listen at ${PORT}`));
  }
  return Promise.reject(connectException);
};

module.exports = bootstrap;
