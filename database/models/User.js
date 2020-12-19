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
            primaryKey: false,
            autoIncrement: false
        },
        e-mail: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false
        },
        password: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false
        },
        remember_token: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false
        },
        created_at: {
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false
        },
        update_at: {
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false
        }
    };

    let config = {
        tableName: "users",
        timestamps: false
    };
    
    const User = sequelize.define(alias, cols, config);
    
    return User;
}