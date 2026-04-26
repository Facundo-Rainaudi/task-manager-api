const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  // 'task_manager',
  // 'root',
  // 'root',
  // {
  //     host: 'localhost',
  //     port: 3306,
  //     dialect: 'mysql', //Q tipo de base de datos vamos a utilizar
  //     logging: false
  // }

  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  },
);

module.exports = sequelize;
