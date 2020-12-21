module.exports = (sequelize, DataTypes) => {
  let alias = "Cart";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerID: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    productsID: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    taxes: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    total: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  };

  let config = {
    tableName: "Cart",
    timestamps: false,
  };

  const Cart = sequelize.define(alias, cols, config);

  return Cart;
};
