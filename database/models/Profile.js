module.exports = (sequelize, dataTypes) => {
  let alias = "profile";
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
      type: dataTypes.DATE,
      allowNull: false,
    },
    phone: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
  };

  let config = {
    tableName: "customer",
    timestamps: false,
  };

  const customer = sequelize.define(alias, cols, config);

customer.associate = function (models) {
customer.hasMany(model.card, {
  as: "card",
  foreignkey: "customerID",
  });
  };

  profile.associate = function (models) {
     profile.belongsToMany(model.product, {
       as: "cart",
       through: "cart",
       foreignKey: "profileID",
       otherKey: "productID",
       timestamps: true,
     });
   };

  profile.associate = function (models) {
     profile.belongsToMany(model.address, {
       as: "address",
       foreignKey: "profileID",
     });
   };

  return customer;
};
