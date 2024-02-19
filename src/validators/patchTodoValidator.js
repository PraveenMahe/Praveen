
// const { checkSchema } = require('express-validator');

// const patchTodoValidationSchema = checkSchema({
//   text: {
//     in: ['body'],
//     isString: {
//       errorMessage: 'Text must be a string.',
//       optional: true,
//     },
//     trim: true,
//   },
//   completed: {
//     in: ['body'],
//     isInt: {
//       errorMessage: 'Completed must be an integer.',
//       optional: true,
//     },
//     trim: true,
//   },
// });

// module.exports = patchTodoValidationSchema;


const { checkSchema, param } = require('express-validator');
const patchTodoValidationSchema = checkSchema({
  text: {
    in: ['body'],
    isString: {
      errorMessage: 'Text must be a string.',
      optional: true,
    },
    trim: true,
  },
  completed: {
    in: ['body'],
    isInt: {
      errorMessage: 'Completed must be an integer.',
      optional: true,
    },
    trim: true,
  },
});
const todoIdValidationSchema = param('id')
  .isInt()
  .withMessage('Todo ID must be an integer.');

module.exports = { patchTodoValidationSchema, todoIdValidationSchema };
