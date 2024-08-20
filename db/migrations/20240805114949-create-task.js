'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    queryInterface.createTable('tasks', {
      id: {
        allow_null: false,
        auto_increment: true,
        primary_key: true,
        type: Sequelize.INTEGER,
      },
      taskText: {
        validate: {
          len: [0, 255],
        },
        allow_null: false,
        type: Sequelize.STRING,
      },
      isChecked: {
        type: Sequelize.BOOLEAN,
        default_value: false,
        allow_null: false,
      },
      createdAt: {
        allow_null: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allow_null: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Tasks');
  },
};
