require("./loadConfiguration.js")();
const bootstrap = require("./bootstrap");

bootstrap()
  .then(() => console.log("bootstrap done"))
  .catch((bootstrapException) => console.log(bootstrapException));
