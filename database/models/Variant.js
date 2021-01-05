module.exports = (sequelize, dataTypes) => {
  let alias = "variants";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    subtype: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    gender: {
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
    quality: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    costtype: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "variants",
    timestamps: false,
  };

  const categories = sequelize.define(alias, cols, config);

  // categories.associate = function (models) {
  //   categories.belongsToMany(model.categories, {
  //     as: "categories",
  //     through: "products_categories",
  //     foreignKey: "categoriesID",
  //     otherKey: "productsID",
  //     timestamps: false,
  //   });
  // };

  return categories;
};
