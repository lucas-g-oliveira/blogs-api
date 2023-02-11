const express = require('express');
const midd = require('../controller/middlewares');

const route = express.Router();

const { postControler } = require('../controller');

/* const midd = require('../controller/middlewares'); */

route.get('/',
  midd.token,
  postControler.getAllPost);

route.get('/:id',
  midd.token,
  postControler.getPostById);

route.post('/',
  midd.token,
  midd.addPost,
  postControler.addPost);

route.put('/:id',
  /*   midd.token,
    midd.validTitlePost,
    midd.validContentPost, */
  postControler.setPostById);

route.delete('/:id',
  midd.token,
  postControler.deletePostById);

module.exports = route;
