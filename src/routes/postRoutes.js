const express = require('express');
const { postControler } = require('../controlers');

const route = express.Router();

route.get('/', postControler.getAllPost);

route.get('/:id', postControler.getPostById);

route.post('/', postControler.addPost);

route.put('/:id', postControler.setPostById);

route.delete('/:id', postControler.deletePostById);

module.exports = route;
