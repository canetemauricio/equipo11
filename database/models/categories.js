module.exports = (sequelize, DataTypes) => {
  let alias = "categories";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
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
    tableName: "categories",
    timestamps: false,
  };

  const categories = sequelize.define(alias, cols, config);

  return categories;
};
