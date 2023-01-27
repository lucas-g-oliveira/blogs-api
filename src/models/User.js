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
    }, {
    timestamp: false,
    tableName: 'users',
    underscored: true,
  }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'id', as: 'user_id' });
  }

  return User;
}