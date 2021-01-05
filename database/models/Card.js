module.exports = (sequelize, dataTypes) => {
  let alias = "Card";
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
      type: dataTypes.DATE,
      allowNull: false,
    },
    customerID: {
      type: dataTypes.INTEGER,
    },
  };

  let config = {
    tableName: "Card",
    timestamps: false,
  };

  const Card = sequelize.define(alias, cols, config);

  Card.associate = function (models) {
     Card.belongsTo(models.profile, {
      as: "profile",
      foreignKey: "profileID",
     });
   };

  return Card;
};
