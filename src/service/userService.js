const { User } = require('../models');

/* const objReturn = (data) => ({ status: null, message: data }); */

const getAllUsers = async () => {
  const data = await User.findAll();
  return data;
};

const getById = async (num) => {
  const { id, displayName, email, image } = await User.findByPk(num);
  return { id, displayName, email, image };
};

const checkCredentialsUser = async (email, password) => {
  const data = await User.findOne({ where: { email, password } });
  return data;
};

const addUser = async (obj) => {
  try {
    await User.create(obj);
    const data = await User.findOne({ where: obj });
    return data;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllUsers,
  getById,
  checkCredentialsUser,
  addUser,
};