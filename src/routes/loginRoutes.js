const express = require('express');
const { loginControler } = require('../controller');
const midd = require('../controller/middlewares');

const route = express.Router();

route.post('/',
  midd.loginValidate,
  loginControler.login);

module.exports = route;
