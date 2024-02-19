// const mysql = require('mysql');
// const connection = require('../dbConnection');

// exports.createTodo = (req, res) => {
//   const newTodo = req.body;
//   connection.query('INSERT INTO todos SET ?', newTodo, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Error inserting new todo' });
//       return;
//     }
//     res.json({ id: results.insertId });
//   });
// };


const db = require('../dbConnection');

exports.createTodo = (req, res) => {
  const newTodo = req.body;
  db('todos').insert(newTodo)
    .then((result) => {
      res.json({ id: result[0] });
    })
    .catch((err) => {
      console.error('Error inserting new todo:', err.message);
      res.status(500).json({ error: 'Error inserting new todo' });
    });
};
