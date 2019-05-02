// Packages
const express = require("express");
const helmet = require("helmet");

// Routers
const dishesRouter = require("../routers/dishes-router");
const recipesRouter = require("../routers/recipes-router");

// Server
const server = express();
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to Web DB IV Challenge!");
});

server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);

module.exports = server;
