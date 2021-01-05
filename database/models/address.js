module.exports = (sequelize, dataTypes) => {
  let alias = "address";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  };

  let config = {
    tableName: "address",
    timestamps: false,
  };

  let Address = sequelize.define(alias, cols, config);

  Address.associate = function (models) {
     Address.belongsTo(models.profile, {
       as: "profile",
       foreignKey: "profileID",
     });
   };

  return Address;
};
