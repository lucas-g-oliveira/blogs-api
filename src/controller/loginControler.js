const { encript } = require('../jwtUtils');
const { /* getById, getAllUsers */ checkCredentialsUser } = require('../service/userService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await checkCredentialsUser(email, password);

  if (user) {
    const token = encript({ email });
    return res.status(200).json({ token, user });
  }

  return res.status(400).json({ message: 'Invalid fields' });
};

module.exports = { login };