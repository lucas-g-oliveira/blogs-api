const { getAll, getById, addCateg } = require('../service/categoryService');

const getAllCategories = async (_req, res) => {
  const getCategories = await getAll();
  res.status(200).json(getCategories);
};

const getOneById = async (req, res) => {
  const getCategory = await getById(req.params.id);
  res.status(200).json(getCategory);
};

const addCategory = async (req, res) => {
  const data = await addCateg(req.body.name);
  return res.status(201).json(data);
};

module.exports = { getAllCategories, getOneById, addCategory };