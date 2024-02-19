const express = require('express');
const router = express.Router();
const todosController = require('../controllers/getAllTodosController');

router.get('/todos', todosController.getAllTodos);

module.exports = router;

