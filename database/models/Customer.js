amodule.exports = (sequelize, DataTypes) => {
  let alias = "customer";
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
    tableName: "customer",
    timestamps: false,
  };

  const customer = sequelize.define(alias, cols, config);

  customer.associate = function (models) {
    customer.hasMany(model.Card, {
      as: "cards",
      foreignkey: "customerID",
    });
  };

  customer.associate = function (models) {
    customer.belongsToMany(model.products, {
      as: "cart",
      through: "Cart",
      foreignKey: "customerID",
      otherKey: "productsID",
      timestamps: true,
    });
  };

  customer.associate = function (models) {
    customer.belongsToMany(model.address, {
      as: "addresses",
      foreignKey: "customerID",
    });
  };

  return customer;
};
