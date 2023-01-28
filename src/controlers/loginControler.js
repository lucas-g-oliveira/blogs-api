const login = async (req, res) =>
  res.status(200).json({ message: 'postLogin não implementado', data: req.body });

module.exports = { login };