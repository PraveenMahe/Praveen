// const mysql = require('mysql');
// const connection = require('../dbConnection'); 

// exports.getAllTodos = (req, res) => {
//   connection.query('SELECT * FROM todos', (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Error retrieving todos' });
//       return;
//     }
//     res.json(results);
//   });
// };


const db = require('../dbConnection');

exports.getAllTodos = async (req, res) => {
  try {    
    const results = await db('todos').select('*');

    res.json(results);
  } catch (err) {
    console.error('Error retrieving todos:', err.message);
    res.status(500).json({ error: 'Error retrieving todos' });
  }
};
