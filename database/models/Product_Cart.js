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
        type: dataTypes.DECIMAL(8,2),
        allowNull: false,
      },
      cartID: {
        type: dataTypes.INTEGER
      },
      productID: {
        type: dataTypes.INTEGER
      }
    };
  
    let config = {
      tableName: "product_cart",
      timestamps: false,
    };
  
    const product_cart = sequelize.define(alias, cols, config);
  
    product_cart.associate = function(models) {
      product_cart.hasMany(models.cart, {
        as: "cart",
        foreignKey: "cartID",
        timestamps: "false"
      }),
      product_cart.hasMany(models.product, {
        foreignKey: "productID",
        timestamps: "false"
      })
    }
  
    return product_cart;
  };
  