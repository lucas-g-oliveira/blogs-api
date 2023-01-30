const express = require('express');
const { loginControler } = require('../controlers');
const { validateLogin } = require('../controlers/middlewares');

const route = express.Router();

route.post('/', validateLogin.loginValidate, loginControler.login);

module.exports = route;
