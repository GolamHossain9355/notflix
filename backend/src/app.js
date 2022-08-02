const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const errorHandler = require("./errors/errorHandler");
const notFoundHandler = require("./errors/notFoundHandler");
const moviesRouter = require("./movies/movies.router");
// const seriesRouter = require("../src/series/series.router");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/movies", moviesRouter);
// app.use("/series", seriesRouter);

//Not found handler
app.use(notFoundHandler);
//error handler
app.use(errorHandler);

module.exports = app;
