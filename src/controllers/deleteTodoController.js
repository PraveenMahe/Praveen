// const db = require('../dbConnection'); 
// const { validationResult } = require('express-validator');

// exports.deleteTodo = async (req, res) => {
  
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const deleteTodoId = req.params.id;

//   try {
    
//     const result = await db('todos').where('id', deleteTodoId).del();
    
//     res.json({ affectedRows: result });
//   } catch (err) {
//     console.error('Error deleting todo:', err.message);
//     res.status(500).json({ error: 'Error deleting todo' });
//   }
// };


const db = require('../dbConnection');
const { validationResult } = require('express-validator');

exports.deleteTodo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const deleteTodoId = req.params.id;

  try {
    const result = await db('todos').where('id', deleteTodoId).del();
    res.json({ affectedRows: result });
  } catch (err) {
    console.error('Error deleting todo:', err.message);
    res.status(500).json({ error: 'Error deleting todo' });
  }
};
