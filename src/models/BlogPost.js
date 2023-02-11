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
      userId: {
        published: 'CASCADE',
        updated: 'CASCADE',
        type: Datatypes.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      published: Datatypes.DATE,
      updated: Datatypes.DATE,
    },
    {
      createAt: 'published',
      updatedAt: 'updated',
      underscored: true,
      timestamps: false,
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  }

  return BlogPost;
};