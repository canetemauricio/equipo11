module.exports = (sequelize, DataTypes) => {
    let alias = "Passwordreset";    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.STRING,
            timestamps: false,
            allowNull: false
        },
        
    };

    let config = {
        tableName: "passwordreset",
        timestamps: false
    };
    
    const Passwordreset = sequelize.define(alias, cols, config);
    
    Passwordreset.associate = function(models) {
        Passwordreset.belongsTo(models.user, {
            as: "passwordreset_user",
            foreignKey: "passwordresetID"
        })
    }

    return Passwordreset;
}