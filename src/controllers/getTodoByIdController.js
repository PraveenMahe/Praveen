// const mysql = require('mysql');
// const connection = require('../dbConnection');

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



const db = require('../dbConnection');
const { validationResult } = require('express-validator');

exports.getTodoById = async (req, res) => {
 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const todoId = req.params.id;

  try {
    
    const result = await db('todos').where('id', todoId).select('*');
    
   
    if (result.length === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }

   
    res.json(result[0]);
  } catch (err) {
    console.error('Error retrieving todo by ID:', err.message);
    res.status(500).json({ error: 'Error retrieving todo by ID' });
  }
};

