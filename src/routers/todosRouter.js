// const express = require('express');
// const todosController = require('../controllers/todosController');
// const todosValidator = require('../validators/todosValidator');
// const { validationResult } = require('express-validator');

// const router = express.Router();

// router.get('/todos', todosController.getAllTodos);

// router.get('/todos/:id', todosValidator.validateTodoId, (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   return todosController.getTodoById(req, res);
// });

// router.post('/todos', todosValidator.validateTodoBody, (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   return todosController.createTodo(req, res);
// });

// router.put('/todos/:id', [todosValidator.validateTodoId, todosValidator.validateUpdateTodoBody], (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   return todosController.updateTodo(req, res);
// });

// router.patch('/todos/:id', [todosValidator.validateTodoId, todosValidator.validateUpdateTodoBody], (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   return todosController.patchTodo(req, res);
// });

// router.delete('/todos/:id', todosValidator.validateTodoId, (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   return todosController.deleteTodo(req, res);
// });

// module.exports = router;
