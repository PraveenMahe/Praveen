// const express = require('express');
// const router = express.Router();
// const todosController = require('../controllers/createTodoController');
// const todosValidator = require('../validators/createTodoValidator');

// router.post('/todos', todosValidator, todosController.createTodo);

// module.exports = router;


const express = require('express');
const router = express.Router();
const todosController = require('../controllers/createTodoController');
const todosValidator = require('../validators/createTodoValidator');

router.post('/todos', todosValidator, todosController.createTodo);

module.exports = router;
