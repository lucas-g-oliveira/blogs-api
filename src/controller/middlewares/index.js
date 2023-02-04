const { decript } = require('../../jwtUtils');
const schemas = require('./schemas');

const BAD_REQUEST = 400;

/* const resExpress = (status, message, key, res) => {
  if (key) return message.replace('value', 'key');
return res.status(status).json({ message });
  }; */

const token = (req, res, next) => {
  const { data, error } = decript(req.headers);
  if (error) {
    return res.status(401).json(error);
  }
  req.headers.auth = data;
  return next();
};

const userIdValidate = (req, res, next) => {
  const { error } = schemas.idValidate.validate(req.params.id);
  if (!error) return next();
  res.status(BAD_REQUEST).json({ message: 'User does not exist' });
};

const addUser = (req, res, next) => {
  const { error } = schemas.addUser.validate(req.body);
  if (!error) return next();
  const msg = (error.message.includes('email')) ? '"email" must be a valid email' : error.message;
  res.status(BAD_REQUEST).json({ message: msg });
};

const postIdValidate = (req, res, next) => {
  const { error } = schemas.idValidate.validate(req.params.id);
  if (!error) return next();
  res.status(404).json({ message: 'Post does not exist' });
};

const addPost = (req, res, next) => {
  const { error } = schemas.addPost(req.body);
  if (!error) return next();
  return res.status(BAD_REQUEST).json({ message: error.message });
};

const setPost = (req, res, next) => {
  const { error } = schemas.setPost(req.body);
  if (!error) return next();
  return res.status(BAD_REQUEST).json({ message: error.message });
};

const loginValidate = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(BAD_REQUEST)
      .json({ message: 'Some required fields are missing' });
  }
  const { error } = schemas.login.validate(req.body);
  if (!error) return next();
  return res.status(BAD_REQUEST).json({ message: 'Invalid fields' });
};

module.exports = {
  token,
  loginValidate,
  addPost,
  addUser,
  postIdValidate,
  setPost,
  userIdValidate,
};