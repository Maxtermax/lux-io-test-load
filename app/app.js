const express = require("express");
const app = express();
const controllers = require("./controllers");
require("./routes")({ app, controllers });

module.exports = app;
