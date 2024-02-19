// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'my_database'
// });
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err.message);
//   } else {
//     console.log('Connected to the database');
//   }
// });

// module.exports = connection;

const knex = require('knex');
const db = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    database: 'my_database'
  }
});
db.select(1)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });

module.exports = db;
