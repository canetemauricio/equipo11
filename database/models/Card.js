module.exports = (sequelize, DataTypes) => {
  let alias = "Card";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issuer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    securitycode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expirationdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    customerID: {
      type: dataTypes.INTEGER,
    },
  };

  let config = {
    tableName: "Card",
    timestamps: false,
  };

  const Card = sequelize.define(alias, cols, config);

  Card.associate = function (models) {
    Card.belongsTo(models.Customer, {
      as: "customer",
      foreignKey: "customerID",
    });
  };

  return Card;
};
