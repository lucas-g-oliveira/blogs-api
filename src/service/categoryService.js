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

module.exports = { getAll, getById };