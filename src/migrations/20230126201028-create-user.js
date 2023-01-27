module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'users',
      {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id'
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'display_name',
      },
      email:{
        allowNull: false,
        type: Sequelize.STRING,
        field: 'email'
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING,
        field: 'password',
      },
      image:{allowNull: false,
        type: Sequelize.STRING,
        field: 'image'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
