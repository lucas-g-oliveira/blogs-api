const { encript } = require('../jwtUtils');
const users = require('../service/userService');

const getAllUsers = async (req, res) => {
  const allUsers = await users.getAllUsers();
  const withoutPassword = allUsers.map((e) => ({
    id: e.id,
    displayName: e.displayName,
    email: e.email,
    image: e.image,
  }));
  res.status(200).json(withoutPassword);
};

const getUserById = async (req, res) => {
  const oneUser = await users.getById(req.params.id);
  if (!oneUser) return res.status(404).json({ message: 'User does not exist' });
  res.status(200).json(oneUser);
};

const addUser = async (req, res) => {
  console.log('op da service de chamar a model que adiciona');
  res.status(200).json({ token: encript({ email: req.body.email, id: 1 }) });
};

const deleteUser = async (req, res) =>
  res.status(200).json({ message: 'deleteUsersById não implementado', data: req.param.id });

module.exports = { getAllUsers, getUserById, addUser, deleteUser };