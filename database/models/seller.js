module.exports = (sequelize, dataTypes) => {
  let alias = "seller";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    DNI: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    birthday: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: dataTypes.STRING,
      allowNull: true,
    },
  };

  let config = {
    tableName: "seller",
    timestamps: false,
  };

  const seller = sequelize.define(alias, cols, config);

  // seller.associate = function (models) {
  //   seller.belongsToMany(model.address, {
  //     as: "addresses",
  //     foreignKey: "sellerID",
  //   });
  // };

  return seller;
};
