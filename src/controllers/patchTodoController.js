
// const db = require('../dbConnection');
// const { validationResult } = require('express-validator');
// const patchTodoValidationSchema = require('../validators/patchTodoValidator');

// exports.patchTodo = async (req, res) => {
//   const validationSchema = patchTodoValidationSchema; 
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const updatedTodo = req.body;
//   const updateTodoId = req.params.id;

//   try {
//     const result = await db('todos').where('id', updateTodoId).update(updatedTodo);
//     res.json({ affectedRows: result });
//   } catch (err) {
//     console.error('Error updating todo with PATCH:', err.message);
//     res.status(500).json({ error: 'Error updating todo with PATCH' });
//   }
// };


const db = require('../dbConnection');
const { validationResult } = require('express-validator');
const patchTodoValidationSchema = require('../validators/patchTodoValidator');

const validatePatchTodo = async (req, res, next) => {
  const validationSchema = patchTodoValidationSchema;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

const patchTodo = async (req, res) => {
  const updatedTodo = req.body;
  const updateTodoId = req.params.id;

  try {
    const result = await db('todos').where('id', updateTodoId).update(updatedTodo);
    res.json({ affectedRows: result });
  } catch (err) {
    console.error('Error updating todo with PATCH:', err.message);
    res.status(500).json({ error: 'Error updating todo with PATCH' });
  }
};

module.exports = { validatePatchTodo, patchTodo };
