amodule.exports = (sequelize, DataTypes) => {
  let alias = "seller";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DNI: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  };

  let config = {
    tableName: "seller",
    timestamps: false,
  };

  const seller = sequelize.define(alias, cols, config);

  seller.associate = function (models) {
    seller.belongsToMany(model.address, {
      as: "addresses",
      foreignKey: "sellerID",
    });
  };

  return seller;
};
