// const express = require('express');
// const router = express.Router();
// const todosController = require('../controllers/patchTodoController');
// const todosValidator = require('../validators/patchTodoValidator');

// router.patch('/todos/:id', todosValidator, todosController.patchTodo);

// module.exports = router;


const express = require('express');
const router = express.Router();
const todosController = require('../controllers/patchTodoController');
const todosValidator = require('../validators/patchTodoValidator');

router.patch('/todos/:id', [
  todosValidator.todoIdValidationSchema,
  todosValidator.patchTodoValidationSchema,
  todosController.validatePatchTodo,
  todosController.patchTodo,
]);

module.exports = router;

