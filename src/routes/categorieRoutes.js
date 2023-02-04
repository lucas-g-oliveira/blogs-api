const express = require('express');
const { categoryControler } = require('../controller');
/* const midd = require('../controller/middlewares'); */

const route = express.Router();

route.post('/',
 /*  midd.token, */
  categoryControler.getAllCategories);

module.exports = route;