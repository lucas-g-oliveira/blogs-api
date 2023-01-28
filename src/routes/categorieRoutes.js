const express = require('express');
const { categoryControler } = require('../controlers');

const route = express.Router();

route.get('/', categoryControler.getAllCategories);

route.post('/', categoryControler.addNewCategory);

module.exports = route;