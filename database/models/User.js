module.exports = (sequelize, DataTypes) => {
    let alias = "Users";    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        remember_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            timestamps: true,
            allowNull: false
        },
        update_at: {
            type: DataTypes.DATE,
            timestamps: false,
            allowNull: false
        }
    };

    let config = {
        tableName: "users",
        timestamps: false
    };
    
    const User = sequelize.define(alias, cols, config);
    
    User.associate = function(models) {
        User.belongsTo(models.passwordreset, {
            as: "passwordreset",
            foreignKey: "id"
        })

    }

    return User;
}