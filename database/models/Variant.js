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
    tableName: "variant",
    timestamps: false,
  };

  const variant = sequelize.define(alias, cols, config);

   variant.associate = function (models) {
     variant.belongsToMany(models.variant, {
       as: "variant",
       through: "product_variant",
       foreignKey: "variantID",
       otherKey: "productID",
       timestamps: false,
     });
   };

  return variant;
};
