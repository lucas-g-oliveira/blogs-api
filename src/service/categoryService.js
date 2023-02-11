const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getById = async (num) => {
  const oneCateg = await Category.findByPk(num);
  if (oneCateg) {
    return oneCateg;
  }
  return oneCateg;
};

const addCateg = async (name) => {
  try {
    await Category.create({ name });
    const getAgain = await await Category.findOne({ where: { name } });
    return getAgain;
  } catch (err) {
    return err.message;
  }
};
module.exports = { getAll, getById, addCateg };