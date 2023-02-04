module.exports = (sequelize, Datatypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      categoryId: {
        type: Datatypes.INTEGER,
        primayKey: true,
        /* field: 'category_id', */
      },
      postId: {
        type: Datatypes.INTEGER,
        primayKey: true,
        /* field: 'post_id', */
      }
    },
    {
      timestamp: false,
      underscored: true,
      tableName: 'posts_categories'
    });

  PostCategory.associate = ({BlogPost, Category}) => {
    Category.belongsToMany(BlogPost, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    
    BlogPost.belongsToMany(Category, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };

  return PostCategory;
};