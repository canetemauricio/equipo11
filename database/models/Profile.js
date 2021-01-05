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
    tableName: "profile",
    timestamps: false,
  };

  const profile = sequelize.define(alias, cols, config);

profile.associate = function (models) {
  profile.hasMany(models.card, {
    as: "card",
    foreignkey: "profileID",
   });
  profile.belongsTo(models.product, {
        as: "cart",
        foreignKey: "profileID",
  });
  profile.hasMany(models.address, {
       as: "address",
       foreignKey: "profileID",  
  });
 };

  return profile;
};
