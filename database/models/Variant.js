module.exports = (sequelize, dataTypes) => {
  let alias = "variant";
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
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    }
  };

  let config = {
    tableName: "variant",
    timestamps: false,
  };

  const variant = sequelize.define(alias, cols, config);

   variant.associate = function (models) {
     variant.belongsToMany(models.product, {
       as: "products",
       through: "product_variant",
       foreignKey: "variantID",
       otherKey: "productID",
       timestamps: false,
     });
   };

  return variant;
};
