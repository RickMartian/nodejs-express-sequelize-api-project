const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ProductsController = require('./controllers/ProductController');

routes.get('/users', UserController.showAll);
routes.post('/register', UserController.create);
routes.put('/user/:id', UserController.update);
routes.get('/user/:id', UserController.showId);
routes.delete('/user/:id', UserController.delete);

routes.get('/products', ProductsController.showAll);
routes.post('/products/register', ProductsController.register);
routes.get('/product/:id', ProductsController.showId);
routes.put('/product/:id', ProductsController.update);
routes.delete('/product/:id', ProductsController.delete);

module.exports = routes;