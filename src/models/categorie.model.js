const CategorieModel = (sequelize, Datatype) => {
  const Categorie = sequelize.define('Categorie',{
    name: Datatype.STRING
  },{
    tableName: "categories",
  });

  return 
};