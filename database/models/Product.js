module.exports = (sequelize, dataTypes) => {
  let alias = "product";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(8,2),
      allowNull: false,
    }
  };

  let config = {
    tableName: "product",
    timestamps: false,
  };

  const product = sequelize.define(alias, cols, config);

  product.associate = function(models) {
    product.belongsToMany(models.cart, {
      as: "cart",
      through: "product_cart",
      foreignKey: "productID",
      otherKey: "cartID"
    })
  }

  return product;
};
