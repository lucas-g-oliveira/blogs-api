const express = require('express');
const { loginControler } = require('../controlers');

const route = express.Router();

route.post('/', loginControler.login);

module.exports = route;
