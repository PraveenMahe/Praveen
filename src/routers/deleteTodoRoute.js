const express = require('express');
const router = express.Router();
const todosController = require('../controllers/deleteTodoController');
const todosValidator = require('../validators/deleteTodoValidator');

router.delete('/todos/:id', todosValidator, todosController.deleteTodo);

module.exports = router;

