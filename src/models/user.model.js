const UserModel = (sequelize, Datatypes) => {
  const User = sequelize.define('User',{
    displayName: Datatypes.STRING,
    email: Datatypes.STRING,
    password: Datatypes.STRING,
    image: Datatypes.STRING,
  },{
    tableName: "users",
  });

  return User;
}