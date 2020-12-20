module.exports = (sequelize, DataTypes) => {
  let alias = "address";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    
  };

  let config = {
    tableName: "address",
    timestamps: false,
  };

  const address = sequelize.define(alias, cols, config);

  return address;
};
