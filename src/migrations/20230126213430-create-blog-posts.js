module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_posts',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id',
      },
      title:{
        allowNull: false,
        type: Sequelize.STRING,
        field: 'title',
      },
      content:{
        allowNull: false,
        type: Sequelize.STRING,
        field: 'content'
      },
      userId:{
        type:Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references:{
          model: 'users',
          key:'id',
        }
      },
      published:{
        type: Sequelize.DATE,
        allowNull: false,
        field: 'published',
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('blog_posts');
  }
};
