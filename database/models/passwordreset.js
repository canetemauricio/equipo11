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
            primaryKey: false,
            autoIncrement: false
        },
        token: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false
        },
        created_at: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false
        },
        
    };

    let config = {
        tableName: "passwordreset",
        timestamps: false
    };
    
    const User = sequelize.define(alias, cols, config);
    
    return User;
}