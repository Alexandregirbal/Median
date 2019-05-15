const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("median_db","root","",{
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = sequelize; //nous sert à exporter sous 'db'
db.Sequelize = Sequelize;

/* following code is used to test the database connexion*/
/*sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });*/

module.exports = db;
