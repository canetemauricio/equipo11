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
      type: dataTypes.STRING,
      allowNull: false,
    },    
    profileID: {
      type: dataTypes.INTEGER,
    },
  };

  let config = {
    tableName: "address",
    timestamps: false,
  };

  let address = sequelize.define(alias, cols, config);

  address.associate = function (models) {
     address.belongsTo(models.profile, {
       as: "profile",
       foreignKey: "profileID",
     });
   };

  return address;
};
