modules.export = (sequelize, _Datatype) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {},
    {
      timestamp: false,
      underscored: true,
      tableName: 'posts_categories'
    });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.Category, {
      as: 'category_id',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.BlogPost.belongsToMany(models.BlogPost, {
      as: 'post_id',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  }

  return PostCategory;
};