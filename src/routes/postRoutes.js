const express = require('express');

const route = express.Router();

const { validatePost } = require('../controlers/middlewares');
const { postControler } = require('../controlers');

route.get('/',
  postControler.getAllPost); // NN

route.get('/:id',
  validatePost.postIdValidator,
  postControler.getPostById); // ID

route.post('/',
  validatePost.addPost,
  postControler.addPost);

route.put('/:id',
  validatePost.postIdValidator,
  validatePost.setPost,
  postControler.setPostById);

route.delete('/:id', postControler.deletePostById);

module.exports = route;
