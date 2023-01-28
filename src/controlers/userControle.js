const getAllUsers = async (_req, res) =>
  res.status(200).send('getAllUsers não implementado');

const getUserById = async (_req, res) =>
  res.status(200).send('getUsersById não implementado');

const addUser = async (req, res) =>
  res.status(200).send('addUsers não implementado');

const deleteUser = async (req, res) =>
  res.status(200).send('deleteUsersById não implementado');

module.exports = { getAllUsers, getUserById, addUser, deleteUser };