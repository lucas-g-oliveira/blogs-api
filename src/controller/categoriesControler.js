const { getAll, getById } = require('../service/categoryService');

const getAllCategories = async (req, res) => {
  const getCategories = await getAll();
  res.status(200).json(getCategories);
};

const getOneById = async (_req, res) => {
  const getCategory = await getById();
  res.status(200).json(getCategory);
};

module.exports = { getAllCategories, getOneById };