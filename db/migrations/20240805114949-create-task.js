'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      task_text: {
        validate: {
          len: [0, 255],
        },
        allowNull: false,
        type: Sequelize.STRING,
      },
      is_checked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('tasks');
  },
};
