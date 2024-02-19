
// const db = require('../dbConnection');

// exports.updateTodo = async (req, res) => {
//   const updatedTodo = req.body;
//   const updateTodoId = req.params.id;

//   try {
//     const result = await db('todos').where('id', updateTodoId).update(updatedTodo);
//     res.json({ affectedRows: result });
//   } catch (error) {
//     console.error('Error updating todo:', error.message);
//     res.status(500).json({ error: 'Error updating todo' });
//   }
// };

const db = require('../dbConnection');
const { validationResult } = require('express-validator');
const updateValidationSchema = require('../validators/updateTodoValidator');

exports.updateTodo = async (req, res) => {
  const validationSchema = updateValidationSchema;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const updatedTodo = req.body;
  const updateTodoId = req.params.id;

  try {
    const result = await db('todos').where('id', updateTodoId).update(updatedTodo);
    res.json({ affectedRows: result });
  } catch (error) {
    console.error('Error updating todo:', error.message);
    res.status(500).json({ error: 'Error updating todo' });
  }
};
