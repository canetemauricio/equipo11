module.exports = {
  development: {
    username: "root",
    password: "",
    database: "MagDB",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "admin",
    password: "admin",
    database: "mag_db_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "admin",
    password: "admin",
    database: "mag_db_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
