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
  
    // product_cart.associate = function(models) {
    //   product_cart.hasMany(models.cart, {
    //     as: "cart",
    //     foreignKey: "cartID",
    //     timestamps: "false"
    //   }),
    //   product_cart.hasMany(models.product, {
    //     as: "product",
    //     foreignKey: "productID",
    //     timestamps: "false"
    //   })
    // }
  
    return product_cart;
  };
  