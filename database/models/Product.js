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
    },
    gender: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: dataTypes.DATE,
    },
    categoriesID: {
      type: dataTypes.INTEGER,
      foreignKey: true,      
    }
  };

  let config = {
    tableName: "product",
    timestamps: false,
    paranoid: true,
  };

  const product = sequelize.define(alias, cols, config);

  product.associate = function(models) {
    product.belongsToMany(models.cart, {
      as: "cart",
      through: "product_cart",
      foreignKey: 'cartID',
      otherKey: "productID"
    })
    product.belongsTo(models.category, {
      as: "category",
      foreignKey: "categoriesID",
    })
  }

  return product;
};
