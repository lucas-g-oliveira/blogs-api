const getAllPost = async (_req, res) =>
  res.status(200).json({ message: 'getAllPosts não implementado' });

const getPostById = async (req, res) =>
  res.status(200).json({ message: 'getPostById não implementado', data: req.params });

const addPost = async (req, res) =>
  res.status(200).json({ message: 'addPost não implementado', data: req.body });

const deletePostById = async (req, res) =>
  res.status(200).json({ message: 'deletePostById não implementado', data: req.param });

const setPostById = async (req, res) =>
  res.status(200).json({ message: 'setPostById não implementadp' });

module.exports = { getAllPost, getPostById, addPost, deletePostById, setPostById };