const schemas = require('./schemas/schemas');

const postIdValidator = (req, res, next) => {
  const { error } = schemas.idValidate.validate(req.params.id);
  if (!error) return next();
  return res.status(404).json({ message: 'Post does not exist' });
};

const addPost = (req, res, next) => {
  const { error } = schemas.addPost(req.body);
  if (!error) return next();
  return res.status(400).json({ message: error.message });
};

const setPost = (req, res, next) => {
  const { error } = schemas.setPost(req.body);
  if (!error) return next();
  return res.status(400).json({ message: error.message });
};

module.exports = {
  postIdValidator,
  addPost,
  setPost,
};