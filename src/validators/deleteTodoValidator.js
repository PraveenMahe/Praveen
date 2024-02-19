
const { checkSchema } = require('express-validator');

const paramValidationSchema = {
  id: {
    in: ['params'],
    isInt: {
      errorMessage: 'ID must be an integer.',
      options: { min: 1 },
    },
  },
};

module.exports = checkSchema(paramValidationSchema);


