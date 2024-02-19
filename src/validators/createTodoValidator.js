// const { body } = require('express-validator');

// module.exports = [
//   body('text').isString().trim().notEmpty(),
//   body('completed').isString().trim().notEmpty(),
// ];


const { checkSchema } = require('express-validator');

const validationSchema = checkSchema({
  text: {
    in: ['body'],
    isString: {
      errorMessage: 'Text must be a non-empty string.',
    },
    trim: true,
    notEmpty: {
      errorMessage: 'Text cannot be empty.',
    },
  },
  completed: {
    in: ['body'],
    isInt: {
      errorMessage: 'Completed must be an integer.',
    },
    optional: true,
  },
});

module.exports = validationSchema;
