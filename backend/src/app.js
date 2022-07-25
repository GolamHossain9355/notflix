const express = require("express");
const app = express();
const morgan = require("morgan");
const notFoundHandler = require("./errors/notFoundHandler");
const errorHandler = require("./errors/errorHandler");
 
const cors = require("cors");
 
app.use(express.json());
app.use(morgan("dev"));
//app.use(cors())
 
//Not found handler
app.use(notFoundHandler);
//error handler
app.use(errorHandler);
 
module.exports = app;