const { encript } = require('../jwtUtils');

const login = async (req, res) => {
  const token = encript({ email: req.body.email, id: 'requisição do bd' });

  res.status(200).json({ token });
};

module.exports = { login };