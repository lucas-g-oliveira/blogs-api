const schemas = require('./schemas/schemas');

const loginValidate = (req, res, next) => {
  const { error } = schemas.login.validate(req.body);
  if (!error) return next();
  return res.status(400).json({ message: 'Some required fields are missing' });
};

module.exports = { loginValidate };