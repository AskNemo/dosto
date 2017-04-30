module.exports = (sequelize, DataTypes) => {
  const fields = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  };

  const classMethods = {
    assosciate: (models, instance) => {
    }, //eslint-disable-line
  };

  return sequelize.define('User', fields, {
    paranoid: true,
    tableName: 'users',
    timestamps: true,
    classMethods
  });
};
