const express = require('express');
const { userControler } = require('../controller');
const midd = require('../controller/middlewares');

const route = express.Router();

route.get('/',
midd.token,
userControler.getAllUsers);

route.get('/:id',
midd.token,
userControler.getUserById);

// aqui
route.post('/',
midd.addUser,
userControler.addUser);

route.delete('/:id',
midd.token,
userControler.deleteUser);

module.exports = route;
