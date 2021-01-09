module.exports = (sequelize, dataTypes) => {
  let alias = "card";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    issuer: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    securitycode: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    expirationdate: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    profileID: {
      type: dataTypes.INTEGER,
    },
  };

  let config = {
    tableName: "card",
    timestamps: false,
  };

  const card = sequelize.define(alias, cols, config);

  card.associate = function (models) {
     card.belongsTo(models.profile, {
      as: "profile",
      foreignKey: "profileID",
     });
   };

  return card;
};
