const Joi = require('joi');

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// POST login
const login = Joi.object().keys({
  email: Joi.string().regex(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

// GET simpleId
const idValidate = Joi.number().required();

// POST post
const addPost = Joi.object().keys({
  title: Joi.string().min(8).required(),
  content: Joi.string().min(8).required(),
  categoryId: Joi.array().items(Joi.number().integer().min(1)).length(2).required(),
});

// PUT post
const setPost = Joi.object().keys({});

// POST User
const addUser = Joi.object().keys({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().regex(emailRegex).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().min(6),
});

// POST category
const addCategory = Joi.object().keys({
  name: Joi.string().min(8).required(),
});

module.exports = { login, addUser, addPost, addCategory, idValidate, setPost };