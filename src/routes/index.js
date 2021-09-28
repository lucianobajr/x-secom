const { Router } = require("express");
const routes = Router();

const categories = require("./categories");
const products = require("./products");

routes.get("/", (req, res) => res.json({ ok: "api is running! =)" }));

routes.use("/categories", categories);
routes.use("/products", products);

module.exports = routes;
