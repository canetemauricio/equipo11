module.exports = (sequelize, dataTypes) => {
    let alias = "category";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: dataTypes.STRING,
        allowNull: false,
      }
    };
  
    let config = {
      tableName: "categories",
      timestamps: false,
    };
  
    const category = sequelize.define(alias, cols, config);
    
    category.associate = function(models) {
        category.hasMany(models.product, {
            as: 'products',
            foreignKey: 'categoriesID'
        })
    }
    return category;
  };
  