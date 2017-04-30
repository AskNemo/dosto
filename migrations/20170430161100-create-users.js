module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      name: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
      email: { type: Sequelize.STRING, allowNull: false },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted_at: {
        type: Sequelize.DATE, allowNull: true } }).then(() => queryInterface.addIndex('users', ['deleted_at'])).then(() => queryInterface.addIndex('users', ['email'], { indicesType: 'UNIQUE' }));
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
