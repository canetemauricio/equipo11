module.exports = (sequelize, DataTypes) => {
  let alias = "cards";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    issuer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    securitycode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expirationdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    
  };

  let config = {
    tableName: "cards",
    timestamps: false,
  };

  const cards = sequelize.define(alias, cols, config);

  return cards;
};
