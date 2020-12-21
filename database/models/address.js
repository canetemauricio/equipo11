module.exports = (sequelize, DataTypes) => {
  let alias = "address";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  };

  let config = {
    tableName: "address",
    timestamps: false,
  };

  const address = sequelize.define(alias, cols, config);

  Address.associate = function (models) {
    Address.belongsTo(models.Customer, {
      as: "customer",
      foreignKey: "customerID",
    });
  };

  Address.associate = function (models) {
    Address.belongsTo(models.seller, {
      as: "seller",
      foreignKey: "sellerID",
    });
  };

  return address;
};
