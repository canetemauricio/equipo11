module.exports = (sequelize, dataTypes) => {
  let alias = "gender";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    gender: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "gender",
    timestamps: false,
  };

  const gender = sequelize.define(alias, cols, config);

  gender.associate = function (models) {
    gender.hasMany(models.product, {
      as: "products",
      foreignKey: "genderID",
    });
  };
  return gender;
};
