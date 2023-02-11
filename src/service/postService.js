// const { Op } = require('sequelize');
const snakeize = require('snakeize');
const { BlogPost, User, Category, PostCategory } = require('../models');

// trabalhando aqui
const addPost = async (email, obj) => {
  const user = await User.findOne({ where: { email } });
  let allCategoryes = await Category.findAll();
  allCategoryes = allCategoryes.map((e) => e.dataValues.id);
  const testCategoryes = obj.categoryIds.every((e) => allCategoryes.includes(e));

  if (!testCategoryes) return { error: 'one or more "categoryIds" not found' };

  try {
    const { categoryIds } = obj;
    const moreData = { published: new Date(), updated: new Date(), userId: user.id };
    const data = await BlogPost.create({ ...obj, ...moreData });
    const newPostsCategory = await categoryIds.map((e) => ({ postId: data.id, categoryId: e }));

    await PostCategory.bulkCreate(snakeize(newPostsCategory));
    return data;
  } catch (err) {
    return err;
  }
};

const getAllPost = async () => {
  const data = await BlogPost
    .findAll({
      include: [
        { model: User, as: 'users' },
        { model: Category, as: 'categories' },
      ],
    });
  return data;
};

const getPostById = async (idNumber) => {
  const data = await BlogPost
    .findByPk(idNumber, {
      include: [
        { model: User, as: 'user', atributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });
  return data;
};

/* const delPost = async (idNumber) => {
  const data = await BlogPost.findByPk(idNumber);

  if (!data) return { erro: 'Post Não Existe', status: false };
  if (userId !== data.id) return { erro: 'Post de outro usuário', status: false };

  try {
    await BlogPost.destroy({ where: { id: idNumber } });
    return { status: true, message: 'deletado com sucesso' };
  } catch (err) {
    return { status: false, erro: err.message };
  }
}; */

module.exports = { addPost, getAllPost, getPostById/* , delPost */ };