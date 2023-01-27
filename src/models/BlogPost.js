module.exports = (sequelize, Datatypes) => {
  const BlogPost = sequelize.define(
    'BlogPost'
    , {
      title: Datatypes.STRING,
      content: Datatypes.STRING,
      userId: { type: Datatypes.STRING, foreignKey: true },
      published: Datatypes.DATE,
      updated: Datatypes.DATE,
    }, {
    timestamp: false,
    table_name: 'blog_posts'
  });

  User.associate = (models) => {
    User.belongsTo(models.User);
  }

  return BlogPost;
};