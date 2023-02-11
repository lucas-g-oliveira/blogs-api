const { User } = require('../models');
const jwt = require('../jwtUtils');

/* const objReturn = (data) => ({ status: null, message: data }); */

const getAllUsers = async () => {
  const data = await User.findAll();
  return data;
};

const getById = async (num) => {
  const oneUser = await User.findByPk(num);
  if (oneUser) {
    const { id, displayName, email, image } = oneUser;
    return { id, displayName, email, image };
  }
  return null;
};

const checkCredentialsUser = async (email, password) => {
  const data = await User.findOne({ where: { email, password } });
  return data;
};

const addUser = async (obj) => {
  const data = await User.findOne({ where: { email: obj.email } });
  if (data) return null;
  try {
    await User.create(obj);
    return obj.email;
  } catch (err) {
    return err.message;
  }
};

const deleteMe = async ({ authorization }) => {
  try {
    const auth = jwt.decript(authorization);
    const data = await User.findOne({ where: { email: auth.email } });
    await User.destroy({ where: { id: data.id } });
    return 'OK';
  } catch (err) {
    return null;
  }
};

module.exports = {
  getAllUsers,
  getById,
  checkCredentialsUser,
  addUser,
  deleteMe,
};