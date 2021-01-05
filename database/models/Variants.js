module.exports = (sequelize, dataTypes) => {
  let alias = "categories";
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
  };

  let config = {
    tableName: "categories",
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
