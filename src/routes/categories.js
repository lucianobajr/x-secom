const { Router } = require("express");
const routes = Router();
const CategoryController = require("../controllers/category")

routes.post('/', CategoryController.post);
routes.get('/', CategoryController.get);
routes.put('/:id', CategoryController.put);
routes.delete('/:id', CategoryController.delete);

module.exports = routes;