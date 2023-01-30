const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'CHAVE-ULTRA-SECRET4';
// const jwtConfig = { type: 'JWT', algorithm: 'HS256' };

const encript = (data) => jwt.sign(data, secret);

const decript = (token) => {
  try {
    const data = jwt.verify(token, secret);
    return data.data;
  } catch (err) {
    return false;
  }
};

module.exports = { encript, decript };