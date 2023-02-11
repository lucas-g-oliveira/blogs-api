const BlogPost = require('../service/postService');
const jwt = require('../jwtUtils');

const getAllPost = async (_req, res) => {
  const data = await BlogPost.getAllPost();
  if (data.error) return res.status(500).json({ message: 'server internal error' });
  return res.status(200).json(data);
};

const getPostById = async (req, res) => {
  const data = await BlogPost.getPostById(req.params.id);
  if (!data) return res.status(404).json({ message: 'Post does not exist' });
  if (data.error) return res.status(500).json({ message: 'server internal error' });
  return res.status(200).json(data);
};
const addPost = async (req, res) => {
  const auth = jwt.decript(req.headers.authorization);
  const data = await BlogPost.addPost(auth.email, req.body);
  if (data.error) return res.status(400).json({ message: data.error });
  return res.status(201).json(data);
};

/* const deletePostById = async (req, res) => {
  const { auth } = req.headers;
  const { id } = req.params;
  const data = await BlogPost.delPost(id, email);
  console.log(` tratar ${data}`);

  return res.status(200).json({ message: 'deletePostById não implementado', data: req.param });
}; */

const setPostById = async (req, res) =>
  res.status(200)
    .json({ message: 'setPostById não implementadp' });

module.exports = {
  getAllPost,
  getPostById,
  addPost,
  /* deletePostById, */
  setPostById,
};