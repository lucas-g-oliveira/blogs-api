module.exports = (sequelize, Datatypes) => {
  const BlogPost = sequelize.define(
    'BlogPost'
    , {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER,
      },
      title: Datatypes.STRING,
      content: Datatypes.STRING,
      userId: { type: Datatypes.STRING, foreignKey: true },
      published: Datatypes.DATE,
      updated: Datatypes.DATE,
    }, {
    timestamp: false,
    table_name: 'blog_posts',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      {foreignKey: 'id', as:'user_id'});
  }

  return BlogPost;
};