const snakeize = require('snakeize');
const { BlogPost, User, Category, PostCategory, Sequelize } = require('../models');

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
  try {
    const data = await BlogPost
      .findAll({
        include: [
          { model: User, as: 'user' },
          { model: Category, as: 'categories' }],
      });
    return data;
  } catch (err) {
    return { error: true };
  }
};

const getPostById = async (idNumber) => {
  try {
    const data = await BlogPost
      .findByPk(idNumber, {
        include: [
          { model: User, as: 'user' },
          { model: Category, as: 'categories' }],
      });
    return data;
  } catch (err) {
    return { error: true };
  }
};

const getPostByQuery = async (word) => {
  try {
    if (!word) return await getAllPost();
    const data = await BlogPost.findAll(
      { include: [{ model: User, as: 'user' }, { model: Category, as: 'categories' }] },
      {
        where: Sequelize.or(
          { title: { [Sequelize.Op.like]: `%${word}%` } },
          Sequelize.or({ content: { [Sequelize.Op.like]: `%${word}%` } }),
        ),
      },
    );

    return data;
  } catch (err) {
    return { error: true };
  }
};

const delPost = async (idNumber, email) => {
  const { id } = await User.findOne({ where: { email } });
  const post = await BlogPost.findByPk(idNumber);
  if (!post) return { message: 'Post does not exist', cod: 404 };
  if (Number(id) !== Number(post.userId)) return { message: 'Unauthorized user', cod: 401 };

  try {
    await BlogPost.destroy({ where: { id: idNumber } });
    return { cod: 204 };
  } catch (err) {
    return { cod: 500, message: 'internal server error' };
  }
};

module.exports = { addPost, getAllPost, getPostById, getPostByQuery, delPost };