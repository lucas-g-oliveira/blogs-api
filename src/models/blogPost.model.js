const BlogPostModel = (sequelize, Datatypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: Datatypes.STRING,
    content: Datatypes.STRING,
    userId: Datatypes.STRING,
    published: Datatypes.DATE,
    updated: Datatypes.DATE,
  }, {
    timestamp: false,
  });

  return BlogPost;
}