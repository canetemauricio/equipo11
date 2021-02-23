module.exports = (sequelize, dataTypes) => {
  let alias = "brand";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "brand",
    timestamps: false,
  };

  const brand = sequelize.define(alias, cols, config);

  brand.associate = function (models) {
    brand.hasMany(models.product, {
      as: "products",
      foreignKey: "brandID",
    });
  };
  return brand;
};
