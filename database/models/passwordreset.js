module.exports = (sequelize, dataTypes) => {
  let alias = "Passwordreset";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: dataTypes.STRING,
      timestamps: false,
      allowNull: false,
    },
  };

  let config = {
    tableName: "passwordreset",
    timestamps: false,
  };

  const Passwordreset = sequelize.define(alias, cols, config);

  //   Passwordreset.associate = function (models) {
  //     Passwordreset.belongsTo(models.user, {
  //       as: "passwordreset_user",
  //       foreignKey: "passwordresetID",
  //     });
  //   };

  return Passwordreset;
};
