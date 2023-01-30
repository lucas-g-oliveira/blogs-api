const { encript } = require('../jwtUtils');

const getAllUsers = async (_req, res) =>
  res.status(200).json({ message: 'getAllUsers não implementado' });

const getUserById = async (req, res) =>
  res.status(200).json({ message: 'getUsersById não implementado', data: req.param.id });

const addUser = async (req, res) => {
  console.log('op da service de chamar a model que adiciona');
  res.status(200).json({ token: encript({ email: req.body.email, id: 1 }) });
};

const deleteUser = async (req, res) =>
  res.status(200).json({ message: 'deleteUsersById não implementado', data: req.param.id });

module.exports = { getAllUsers, getUserById, addUser, deleteUser };