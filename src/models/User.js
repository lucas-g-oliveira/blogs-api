module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER,
      },
      displayName: Datatypes.STRING,
      email: Datatypes.STRING,
      password: Datatypes.STRING,
      image: Datatypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
      defaultScope: { attributes: { exclude: ['password'] } },
    }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'categories' });
  }

  return User;
}