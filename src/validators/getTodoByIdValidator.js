const { param } = require('express-validator');

module.exports = [param('id').isInt({ min: 1 })];




