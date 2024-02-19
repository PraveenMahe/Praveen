
// const { checkSchema } = require('express-validator');

// const updateValidationSchema = checkSchema({
//   text: {
//     in: ['body'],
//     isString: {
//       errorMessage: 'Text must be a non-empty string.',
//     },
//     trim: true,
//     optional: true,
//   },
//   completed: {
//     in: ['body'],
//     isInt: {
//       errorMessage: 'Completed must be an integer.',
//     },
//     optional: true,
//   },
// });

// module.exports = updateValidationSchema;


// const { checkSchema, param } = require('express-validator');

// const updateValidationSchema = checkSchema({
//   text: {
//     in: ['body'],
//     isString: {
//       errorMessage: 'Text must be a non-empty string.',
//     },
//     trim: true,
//     optional: true,
//   },
//   completed: {
//     in: ['body'],
//     isInt: {
//       errorMessage: 'Completed must be an integer.',
//     },
//     optional: true,
//   },
// });

// const todoIdValidationSchema = param('id')
//   .isInt()
//   .withMessage('Todo ID must be an integer.');

// module.exports = { updateValidationSchema, todoIdValidationSchema };


const { checkSchema, param } = require('express-validator');

const updateValidationSchema = checkSchema({
  text: {
    in: ['body'],
    isString: {
      errorMessage: 'Text must be a non-empty string.',
    },
    trim: true,
    optional: true,
  },
  completed: {
    in: ['body'],
    isBoolean: {
      errorMessage: 'Completed must be a boolean.',
    },
    toBoolean: true, 
    optional: true,
  },
});

const todoIdValidationSchema = param('id')
  .isInt()
  .withMessage('Todo ID must be an integer.');

module.exports = { updateValidationSchema, todoIdValidationSchema };
