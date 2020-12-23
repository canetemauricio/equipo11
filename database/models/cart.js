module.exports = (sequelize, dataTypes) => {
  let alias = "Cart";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerID: {
      type: dataTypes.INTEGER.UNSIGNED,
    },
    productsID: {
      type: dataTypes.INTEGER.UNSIGNED,
    },
    date: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    quantity: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    subtotal: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    taxes: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    total: {
      type: dataTypes.INTEGER.UNSIGNED,
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
