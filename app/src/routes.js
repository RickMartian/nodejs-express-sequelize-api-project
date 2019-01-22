const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/users', UserController.showAll);
routes.post('/register', UserController.create);
routes.put('/user/:id', UserController.update);
routes.get('/user/:id', UserController.showId);
routes.delete('/user/:id', UserController.delete);

module.exports = routes;