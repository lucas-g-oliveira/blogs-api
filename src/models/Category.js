module.exports = (sequelize, Datatype) => {
  const Category = sequelize.define(
    'Category',
    {
      name: Datatype.STRING
    }, {
    timestamp: false,
    tableName: 'categories',
    underscore: true,
  });

  Category.associate

  return Category;
};