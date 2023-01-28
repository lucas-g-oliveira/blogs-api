const express = require('express');
const { postControler } = require('../controlers');

const route = express.Router();

route.get('/', postControler.getAllPost);

route.get(':id', postControler.deletePostById);

route.post('/', postControler.addPost);

route.delete(':id', postControler.deletePostById);

module.exports = route;
