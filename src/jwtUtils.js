const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'CHAVE-ULTRA-SECRET4';
// const jwtConfig = { type: 'JWT', algorithm: 'HS256' };

const encript = (data) => jwt.sign(data, secret);

const decript = (auth) => {
  const token = auth.authorization;

  if (!token) {
    return { error: { message: 'Token not found' }, data: null };
  }

  try {
    const data = jwt.verify(token, secret);
    return data;
  } catch (err) {
    return { error: { message: 'Expired or invalid token' } };
  }
};

module.exports = { encript, decript };