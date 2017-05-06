module.exports = (sequelize, DataTypes) => {
  const fields = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: ''
    }
  };

  const classMethods = {
    assosciate: (models, instance) => {
    }, //eslint-disable-line
  };

  return sequelize.define('Genre', fields, {
    paranoid: true,
    tableName: 'genres',
    timestamps: true,
    classMethods
  });
};
