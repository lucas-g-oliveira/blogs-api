module.exports = (sequelize, Datatypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: Datatypes.INTEGER,
        primayKey: true,
        field: 'post_id',
      },
      categoryId: {
        type: Datatypes.INTEGER,
        primayKey: true,
        field: 'category_id',
      }
    },
    {
      timestamp: false,
      underscored: true,
      tableName: 'posts_categories'
    });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    
    models.BlogPost.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };

  return PostCategory;
};