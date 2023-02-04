const express = require('express');
const { categoryControler } = require('../controller');
const midd = require('../controller/middlewares');

const route = express.Router();

route.get('/',
  midd.token,
  categoryControler.getAllCategories);

 /*  route.post('/',
  midd.token,
  categoryControler.getAllCategories); */

  route.post('/:id',
  midd.token,
  categoryControler.getOneById);

module.exports = route;