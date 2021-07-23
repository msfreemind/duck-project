const Validator = require('validator');
const validText = require('./valid-text');

function countWords(str) {
  if (Validator.isEmpty(str)) return 0;
  return str.trim().split(/\s+/).length;
}

module.exports = function validateFeedingInput(data) {
  let errors = {};

  data.time = validText(data.time) ? data.time : '';
  data.city = validText(data.city) ? data.city : '';
  data.neighbourhood = validText(data.neighbourhood) ? data.neighbourhood : '';

  if (Validator.isEmpty(data.time)) {
    errors.time = 'A feeding time is required';
  }

  if (!Validator.isDate(data.time)) {
    errors.time = 'A valid date is required for feeding time';
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = 'A city is required';
  }

  if (!Validator.isLength(data.city, { max: 140 })) {
    errors.city = 'City must be less than 140 characters';
  }
  
  if (Validator.isEmpty(data.neighbourhood)) {
    errors.neighbourhood = 'A neighbourhood is required';
  }

  if (!Validator.isLength(data.neighbourhood, { max: 140 })) {
    errors.neighbourhood = 'Neighbourhood must be less than 140 characters';
  }

  if (!Validator.isNumeric(data.numDucks)) {
    errors.numDucks = 'Number of ducks must be numeric';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};