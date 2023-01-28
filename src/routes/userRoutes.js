const express = require('express');
const { userControler } = require('../controlers');

const route = express.Router();

route.get('/', userControler.getAllUsers);

route.get('/:id', userControler.getUserById);

route.post('/', userControler.addUser);

route.delete('/:id', userControler.deleteUser);

module.exports = route;
