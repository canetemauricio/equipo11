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
      type: dataTypes.STRING,
      allowNull: false,
    },
    remember_token: {
      type: dataTypes.STRING,
      allowNull: false,
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
      type: dataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    phone: {
      type: dataTypes.STRING,
      allowNull: true,
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
