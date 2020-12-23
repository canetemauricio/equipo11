module.exports = (sequelize, dataTypes) => {
  let alias = "products";
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
    tableName: "products",
    timestamps: false,
  };

  const products = sequelize.define(alias, cols, config);

  // products.associate = function (models) {
  //   products.belongsToMany(model.categories, {
  //     as: "categories",
  //     through: "products_categories",
  //     foreignKey: "productsID",
  //     otherKey: "categoriesID",
  //     timestamps: false,
  //   });
  // };

  // products.associate = function (models) { 1 associate only, remove
  //   products.belongsToMany(model.customer, {
  //     as: "cart",
  //     through: "Cart",
  //     foreignKey: "customerID",
  //     otherKey: "productsID",
  //     timestamps: true,
  //   });
  // };

  return products;
};
