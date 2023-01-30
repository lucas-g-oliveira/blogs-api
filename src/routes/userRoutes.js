const express = require('express');
const { userControler } = require('../controlers');
const { validateUser } = require('../controlers/middlewares');

const route = express.Router();

route.get('/', userControler.getAllUsers);

route.get('/:id', validateUser.userIdValidate, userControler.getUserById);

route.post('/', validateUser.addUser, userControler.addUser);

route.delete('/:id', validateUser.userIdValidate, userControler.deleteUser);

module.exports = route;
