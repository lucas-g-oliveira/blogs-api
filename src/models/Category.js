module.exports = (sequelize, Datatypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER,
      },
      name: Datatypes.STRING,
    }, {
    timestamps: false,
    tableName: 'categories',
    underscore: true,
  });

  return Category;
};