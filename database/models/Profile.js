module.exports = (sequelize, dataTypes) => {
  let alias = "profile";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING
    },
    remember_token: {
      type: dataTypes.STRING
    },
    firstname: {
      type: dataTypes.STRING
    },
    lastname: {
      type: dataTypes.STRING
    },
    gender: {
      type: dataTypes.STRING
    },
    DNI: {
      type: dataTypes.STRING
    },
    birthday: {
      type: dataTypes.DATE
    },
    phone: {
      type: dataTypes.STRING
    },
    type: {
      type: dataTypes.STRING,
      allowNull: false
    }
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
  profile.hasOne(models.cart, {
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
