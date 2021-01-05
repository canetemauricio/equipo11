module.exports = (sequelize, dataTypes) => {
    let alias = "product_cart";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      total: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      product: {
        type: dataTypes.INTEGER
      },
      product_cartID: {
        type: dataTypes.INTEGER
      }
    };
  
    let config = {
      tableName: "product_cart",
      timestamps: false,
    };
  
    const product_cart = sequelize.define(alias, cols, config);
  
    product_cart.associate = function(models) {
      product_cart.belongsTo(models.cart, {
        as: "profile",
        foreignKey: "profileID"
      }),
      product_cart.belongsToMany(models.product, {
        as: "product",
        through: "product_product_cart",
        foreignKey: "product_cartID",
        otherKey: "productID",
        timestamps: "false"
      })
    }
  
    return product_cart;
  };
  