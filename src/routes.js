const express = require('express');
const routes = express.Router();
const knex = require('./database')

const UserController = require('./controllers/UserController')


routes.get("/users", UserController.index)


module.exports = routes

