module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('genres', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      name: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
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
        type: Sequelize.DATE, allowNull: true } }).then(() => queryInterface.addIndex('genres', ['deleted_at'])).then(() => queryInterface.addIndex('genres', ['name'], { indicesType: 'UNIQUE' }));
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('genres');
  }
};
