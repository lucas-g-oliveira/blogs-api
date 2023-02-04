const getAllCategories = async (req, res) =>
  res.status(200).json({ message: 'getCategories não implementado' });

const addNewCategory = async (_req, res) =>
  res.status(200).json({ message: 'postCategories não implementado' });

module.exports = { getAllCategories, addNewCategory };