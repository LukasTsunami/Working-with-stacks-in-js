const Stack = require("../lib/Stack");

const convertDecimalToBinary = function (decimal_number) {
  const stack = new Stack();
  let remainder = 0;
  let number = decimal_number;

  while (number > 0) {
    remainder = Math.floor(number % 2);
    stack.push(remainder);
    number = Math.floor(number / 2);
  }

  let binaryNumbersStr = stack.toString();
  const binaryNumbersStrWithoutComma = binaryNumbersStr.split(",").join("");
  return parseInt(binaryNumbersStrWithoutComma, 2);
};

module.exports = convertDecimalToBinary;
