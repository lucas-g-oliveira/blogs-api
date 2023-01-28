const getAllUsers = async (_req, res) =>
  res.status(200).json({ message: 'getAllUsers não implementado' });

const getUserById = async (req, res) =>
  res.status(200).json({ message: 'getUsersById não implementado', data: req.param.id });

const addUser = async (req, res) =>
  res.status(200).json({ message: 'addUsers não implementado', data: req.body.id });

const deleteUser = async (req, res) =>
  res.status(200).json({ message: 'deleteUsersById não implementado', data: req.param.id });

module.exports = { getAllUsers, getUserById, addUser, deleteUser };