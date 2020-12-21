module.exports = (sequelize, DataTypes) => {
  let alias = "products";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usestate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "products",
    timestamps: false,
  };

  const products = sequelize.define(alias, cols, config);

  products.associate = function (models) {
    products.belongsToMany(model.categories, {
      as: "categories",
      through: "products_categories",
      foreignKey: "productsID",
      otherKey: "categoriesID",
      timestamps: false,
    });
  };

  products.associate = function (models) {
    products.belongsToMany(model.customer, {
      as: "cart",
      through: "Cart",
      foreignKey: "customerID",
      otherKey: "productsID",
      timestamps: true,
    });
  };

  return products;
};
