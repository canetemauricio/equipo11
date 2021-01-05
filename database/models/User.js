module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    type: {
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
    created_at: {
      type: dataTypes.DATE,
      timestamps: true,
      allowNull: false,
    },
    update_at: {
      type: dataTypes.DATE,
      timestamps: false,
      allowNull: false,
    },
  };

  let config = {
    tableName: "users",
    timestamps: false,
  };

  const User = sequelize.define(alias, cols, config);

  //   User.associate = function (models) {
  //     User.belongsTo(models.passwordreset, {
  //       as: "user_passwordreset",
  //       foreignKey: "id",
  //     });
  //   };

  return User;
};
