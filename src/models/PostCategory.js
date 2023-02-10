module.exports = (sequelize, Datatypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      categoryId: {
        type: Datatypes.INTEGER,
        primayKey: true,
        field: 'category_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'categories', key: 'id' },
      },
      postId: {
        type: Datatypes.INTEGER,
        primayKey: true,
        field: 'post_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'blog_posts', key: 'id' }
      }
    },
    {
      timestamp: false,
      underscored: true,
      tableName: 'posts_categories'
    });

  PostCategory.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost, {
      as: 'blog_post',
      through: PostCategory,
      otherKey: 'category_id',
      foreignKey: 'post_id',
    });

    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      otherKey: 'post_id',
      foreignKey: 'category_id',
    });
  };

  return PostCategory;
};