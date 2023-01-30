const schemas = require('./schemas/schemas');

const userIdValidate = (req, res, next) => {
  const { error } = schemas.idValidate.validate(req.params.id);
  if (!error) return next();
  res.status(404).json({ message: 'User does not exist' });
};

const addUser = (req, res, next) => {
  const { error } = schemas.addUser.validate(req.body);
  if (!error) return next();
  const msg = (error.message.includes('email')) ? '"email" must be a valid email' : error.message;
  res.status(400).json({ message: msg });
};

const postIdValidate = (req, res, next) => {
  const { error } = schemas.idValidate.validate(req.params.id);
  if (!error) return next();
  res.status(404).json({ message: 'Post does not exist' });
};

module.exports = {
  userIdValidate,
  postIdValidate,
  addUser,
};