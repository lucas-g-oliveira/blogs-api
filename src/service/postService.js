// const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

// trabalhando aqui
const addPost = async (userId, obj) => {
  // const operations = await obj.categoryIds.map(async (e) => { await Category.findByPk(e); });
  // await Promise.all(operations);
  // const userId = 1; 
  const allCategoryes = await Category.findAll();
  let test = obj.categoryIds.every((e) => allCategoryes.some((i) => i.id === e));
  test = test.length === obj.categoyIds;
  // const catId = operations.some((e) => !e);
  if (!test) return { error: 'one or more "categoryIds" not found' };

  try {
    const moreData = { published: new Date(), updated: new Date(), userId };
    const data = await BlogPost.create({ ...obj, ...moreData });
    return data;
  } catch (err) {
    return err;
  }
};

const getAllPost = async () => {
  const data = await BlogPost
    .findAll({
      include: [
        { model: User, as: 'users', atributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });
  return data;
};

const getPostById = async (idNumber) => {
  const data = await BlogPost
    .findByPk(idNumber, {
      include: [
        { model: User, as: 'users', atributes: { exclude: ['password'] } },
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