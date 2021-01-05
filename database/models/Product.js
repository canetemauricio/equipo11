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
    gender: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    quality: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    usestate: {
      type: dataTypes.STRING,
      allowNull: false,
    },
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
