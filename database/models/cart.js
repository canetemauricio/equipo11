module.exports = (sequelize, dataTypes) => {
  let alias = "cart";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: dataTypes.DATE,
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
    profileID: {
      type: dataTypes.INTEGER
    }
  };

  let config = {
    tableName: "cart",
    timestamps: false,
  };

  const cart = sequelize.define(alias, cols, config);

  cart.associate = function(models) {
    cart.belongsTo(models.profile, {
      as: "profile",
      foreignKey: "profileID"
    }),
    cart.belongsToMany(models.product, {
      as: "product",
      through: "product_cart",
      foreignKey: "cartID",
      otherKey: "productID",
      timestamps: "false"
    })
  }

  return cart;
};
