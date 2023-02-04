const { User } = require('../models');

/* const objReturn = (data) => ({ status: null, message: data }); */

const getAllUsers = async () => {
  try {
    const data = await User.findAll();
    return data;
  } catch (err) {
    return err;
  }
};

const getById = async (id) => {
  try {
    const data = await User.findByPk(id);
    return data;
  } catch (err) {
    return err;
  }
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