module.exports = (sequelize, dataTypes) => {
  let alias = "customer";
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
    tableName: "customer",
    timestamps: false,
  };

  const customer = sequelize.define(alias, cols, config);

  // customer.associate = function (models) {
  //   customer.hasMany(model.Card, {
  //     as: "cards",
  //     foreignkey: "customerID",
  //   });
  // };

  // customer.associate = function (models) {
  //   customer.belongsToMany(model.products, {
  //     as: "cart",
  //     through: "Cart",
  //     foreignKey: "customerID",
  //     otherKey: "productsID",
  //     timestamps: true,
  //   });
  // };

  // customer.associate = function (models) {
  //   customer.belongsToMany(model.address, {
  //     as: "addresses",
  //     foreignKey: "customerID",
  //   });
  // };

  return customer;
};
