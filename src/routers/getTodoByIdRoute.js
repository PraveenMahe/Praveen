const express = require('express');
const router = express.Router();
const todosController = require('../controllers/getTodoByIdController');
const todosValidator = require('../validators/getTodoByIdValidator');

router.get('/todos/:id', todosValidator, todosController.getTodoById);

module.exports = router;

