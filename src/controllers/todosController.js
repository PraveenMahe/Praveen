// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'my_database'
// });

// exports.getAllTodos = (req, res) => {
//   connection.query('SELECT * FROM todos', (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Error retrieving todos' });
//       return;
//     }
//     res.json(results);
//   });
// };

// exports.getTodoById = (req, res) => {
//   const todoId = req.params.id;
//   connection.query('SELECT * FROM todos WHERE id = ?', [todoId], (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Error retrieving todo by ID' });
//       return;
//     }
//     res.json(results[0]);
//   });
// };

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

// exports.updateTodo = (req, res) => {
//   const updatedTodo = req.body;
//   const updateTodoId = req.params.id;
//   connection.query('UPDATE todos SET ? WHERE id = ?', [updatedTodo, updateTodoId], (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Error updating todo' });
//       return;
//     }
//     res.json({ affectedRows: results.affectedRows });
//   });
// };

// exports.patchTodo = (req, res) => {
//   const updatedTodo = req.body;
//   const updateTodoId = req.params.id;
//   connection.query('UPDATE todos SET ? WHERE id = ?', [updatedTodo, updateTodoId], (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Error updating todo with PATCH' });
//       return;
//     }
//     res.json({ affectedRows: results.affectedRows });
//   });
// };

// exports.deleteTodo = (req, res) => {
//   const deleteTodoId = req.params.id;
//   connection.query('DELETE FROM todos WHERE id = ?', [deleteTodoId], (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Error deleting todo' });
//       return;
//     }
//     res.json({ affectedRows: results.affectedRows });
//   });
// };
