const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

/**
 * Choose a correct letter
 */
const chooseLetter = async (number) => {
  number = parseInt(number);

  if (Number.isNaN(number)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid input. Please provide a valid integer.');
  }

  let result = '';

  if (number % 3 === 0) {
    result += 'G';
  }

  if (number % 5 === 0) {
    result += 'N';
  }

  // If the number is not a multiple of 3 or 5, return the original number
  if (result === '') {
    result = number;
  }

  return result;
};

module.exports = {
  chooseLetter
};