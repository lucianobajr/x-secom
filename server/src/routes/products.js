const { Router } = require("express");
const routes = Router();
const ProductsController = require("../controllers/products")

routes.post('/', ProductsController.post);
routes.get('/', ProductsController.get);
routes.get('/:id', ProductsController.getById);
routes.get('/categories/:category', ProductsController.get);
routes.put('/:id', ProductsController.put);
routes.delete('/:id', ProductsController.delete);

module.exports = routes;